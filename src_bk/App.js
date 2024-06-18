import "./assets/css/style.css";
import "./assets/css/stylesy.css";
import "./assets/css/bootstrap.css";
import "./assets/css/responsive.css";
import AppRouter from "./router/AppRouter";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./Admin/router/AppRouter";
import "react-responsive-modal/styles.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  if (window.location.pathname === "/author") {
    localStorage.setItem("_adminRoute", 1);
  }
  if (window.location.pathname === "/") {
    localStorage.removeItem("_adminRoute");
  }

  console.log("window.location.pathname", localStorage.getItem("_adminRoute"));
  return (
    <>
      {localStorage.getItem("_adminRoute") === "1" ? (
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
