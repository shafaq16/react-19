import { Navigate, Routes, Route } from "react-router-dom";

import About from "./about";
import College from "./college";
import Home from "./home";
import Login from "./login";
import Navbar from "./navbar";
import PageNotFound from "./pagenotfound";
import Student from "./student";
import Department from "./department";
import Details from "./details";
import UserList from "./userList";
import UserDetails from "./userDetails";
// import './header.css';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id" element={<UserDetails/>}/>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/user" element={<UserList />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path = "/*" element = {<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
