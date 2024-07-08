import "./assets/css/style.css";
import "./assets/css/stylesy.css";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";

import AppRouter from "./router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./Admin/router/AppRouter";
import "react-responsive-modal/styles.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  if (window.location.pathname === "/author") {
    localStorage.setItem("_adminRoute", 1);
  }
  if (window.location.pathname === "/") {
    localStorage.removeItem("_adminRoute");
  }

  console.log("window.location.pathname", localStorage.getItem("_adminRoute"));

  useEffect(() => {
    // if (window.location.pathname === "/author") {
    //   localStorage.setItem("_adminRoute", "1");
    // } else if (window.location.pathname === "/") {
    //   localStorage.removeItem("_adminRoute");
    // }

    // const adminRoute = localStorage.getItem("_adminRoute");
    // setIsAdmin(adminRoute === "1");

    const script = document.createElement("script");
    script.src = "/assetsad/css/main/stellarnav.min.js";
    console.log(" script.src", script.src);
    script.onload = () => {
      window.jQuery(".stellarnav").stellarNav({
        theme: "plain",
        breakpoint: 960,
        position: "right",
        phoneBtn: "18009997777",
        locationBtn: "https://www.google.com/maps",
      });
    };
    document.body.appendChild(script);
  }, []);
  return (
    <>
      {/* {isAdmin ? <AdminRoute /> : <AppRouter />} */}
      {localStorage.getItem("_adminRoute") == 1 ? (
        <>
          <AdminRoute />
        </>
      ) : (
        <>
          <AppRouter />
        </>
      )}
    </>
  );
}

export default App;
