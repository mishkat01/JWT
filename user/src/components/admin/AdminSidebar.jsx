import { Link } from "react-router-dom";
function AdminSidebar() {
  return (
    <>
      <div id="mySidebar" class="sidebar">
        <Link className="link" to="#">
          Dashboard
        </Link>
        <Link className="link" to="#">
          Services
        </Link>
        <Link className="link" to="#">
          Clients
        </Link>
        <Link className="link" to="#">
          Contact
        </Link>
      </div>
    </>
  );
}

export default AdminSidebar;
