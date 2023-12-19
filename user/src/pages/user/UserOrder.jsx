import Nav from "../../components/Nav";
import UserSidebar from "../../components/user/UserSidebar";

function UserOrder() {
  return (
    <>
      <Nav />
      <div style={{ display: "flex" }}>
        <div>
          <UserSidebar />
        </div>
        <div>Track order here</div>
      </div>
    </>
  );
}

export default UserOrder;
