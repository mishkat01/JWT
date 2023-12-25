import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminNav from "../../../components/admin/AdminNav";
import AuthUser from "../../../components/AuthUser";
import { Navigate } from "react-router-dom";

function ProductAdd() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Student</h2>
      <p className="text-warning">{message}</p>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          {/* {console.log(selectBatch)} */}
          {/* {console.log(selectedCourse)} */}
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="inputPassword4">
            Dob
          </label>
          <input
            onChange={(e) => setDob(e.target.value)}
            type="date"
            className="form-control"
            id="inputPassword4"
            placeholder="Enter Password"
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="courseSelect">
            Course:
          </label>
          <select
            id="courseSelect"
            className="form-select"
            onChange={(e) => setSelectedCourse(e.target.value)}
            value={selectedCourse} // Bind the selectedCourse state to the value attribute
          >
            <option value="">Select a course</option>
            {course.map((c) => (
              <option key={c.c_id} value={c.course_name}>
                {c.course_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="courseSelect">
            Batch NO:
          </label>
          <select
            id="courseSelect"
            className="form-select"
            onChange={(e) => setSelectedBatch(e.target.value)}
            value={selectBatch} // Bind the selectedCourse state to the value attribute
          >
            <option value="">Select a Batch</option>
            {batch.map((c) => (
              <option key={c.c_id} value={c.batch_no}>
                {c.batch_no}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 mb-3">
          <label className="form-label" htmlFor="inputGroupFile01">
            Select Image
          </label>
          <input
            onChange={(e) => setPfile(e.target.files[0])}
            type="file"
            className="form-control"
            id="inputGroupFile01"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
