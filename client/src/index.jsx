import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/sideBar.jsx";
import Login from "./components/login.jsx";
import axios from "axios";
import Announcement from "./components/announcements.jsx";
import Courses from "./components/courses.jsx";
import Students from "./components/students.jsx";
// import { set } from "mongoose";

const App = () => {
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [view, setView] = useState("announcement");
  const [logged, setLogged] = useState(false);
  const [exist, setExist] = useState(true);
  const [courses, setCourses] = useState([]);
  const [role, setRole] = useState("");
  const [students, setStudents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const getCourses = async function () {
    try {
      // console.log(user);
      if (role === "teacher") {
        const crs = await axios.get(`/api/courses/getAll/${user.name}`);
        setCourses(crs.data);
      } else if (role === "student") {
        // console.log(user);
        const tt = await axios.get(`/api/teachers/${user.teacherId}`);
        console.log(tt.data);
        const aa = await axios.get(`/api/courses/getAll/${tt.data.name}`);
        setCourses(aa.data);
      }
      // console.log(crs.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudents = async function () {
    try {
      if (role === "teacher") {
        const st = await axios.get(`/api/students/getAll/${user.id}`);
        setStudents(st.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAnnouncements = async function () {
    try {
      if (role === "teacher") {
        const an = await axios.get(`/api/announcements/getAll/${user.id}`);
        setAnnouncements(an.data);
      } else {
        const tt = await axios.get(`/api/teachers/${user.teacherId}`);
        console.log(tt.data);
        const crs = await axios.get(`/api/courses/getAll/${tt.data.name}`);
        setAnnouncements(crs.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (name, password) => {
    const student = await axios.get(`/api/students/${name}`);
    const teacher = await axios.get(`/api/teachers/name/${name}`);
    // console.log(student,teacher);
    if (student.data) {
      if (student.data.password === password) {
        setUser(student.data);
        setLogged(true);
        setRole("student");
        setRefresh(!refresh);
      } else {
        setExist(false);
      }
    } else if (teacher.data) {
      if (teacher.data.password === password) {
        setUser(teacher.data);
        setLogged(true);
        setRole("teacher");
        setRefresh(!refresh);
      } else {
        setExist(false);
      }
    } else {
      setExist(false);
    }
  };

  const handleSignup = async function (name, password, mail, teacher, type) {
    try {
      if (type === "Student") {
        const teach = await axios.get(`/api/teachers/name/${teacher}`);
        let nw = await axios.post("/api/students/add", {
          name: name,
          password: password,
          mail: mail,
          teacherId: teach.data.id,
        });
      } else {
        let nw = await axios.post("/api/teachers/add", {
          name: name,
          password: password,
          mail: mail,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async (name, link) => {
    try {
      if (name && link) {
        await axios.post(`/api/courses/add/${user.name}`, { name, link });
        setRefresh(!refresh);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/courses/del/${id}/${user.name}`);
      console.log("deleted");
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async function () {};

  useEffect(() => {
    if (role === "teacher") {
      getCourses();
      getStudents();
      getAnnouncements();
    } else if (role === "student") {
      getCourses();
      getAnnouncements();
    }
  }, [refresh]);

  return (
    <div>
      {logged ? (
        <div id="dashboard">
          <nav className="navbar bg-info-subtle fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand">My Classroom</a>
              <a
                className="navbar-brand"
                onClick={() => {
                  setView("announcement");
                }}
              >
                Announcement
              </a>
              <a
                className="navbar-brand"
                onClick={() => {
                  setView("courses");
                }}
              >
                Courses
              </a>
              {role === "teacher" ? (
                <a
                  className="navbar-brand"
                  onClick={() => {
                    setView("students");
                  }}
                >
                  Students
                </a>
              ) : null}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <SideBar addCourse={addCourse} role={role} />
            </div>
          </nav>
          <br />
          <br />
          <br />
          <div className="main">
            {view === "courses" ? (
              <Courses
                courses={courses}
                handleDelete={handleDelete}
                role={role}
              />
            ) : view === "students" ? (
              <Students students={students} role={role} />
            ) : view === "announcement" ? (
              <Announcement
                role={role}
                announcements={announcements}
                handleUpdate={handleUpdate}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <Login
          logged={logged}
          setLogged={setLogged}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          exist={exist}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
