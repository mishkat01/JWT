import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();
  const [s_name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [pfile, setPfile] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(""); // Added state for selected course
  const [selectBatch, setSelectedBatch] = useState("");
  const [batch, setBatch] = useState([]);

  // get course information
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("/exam_manag_api/course.php").then(function response(response) {
      setCourse(response.data);
      setBatch(response.data);
    });
  }

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append("s_name", s_name);
    formData.append("dob", dob);
    formData.append("course", selectedCourse); // Use the selectedCourse state
    formData.append("batch_no", selectBatch);
    formData.append("phone", phone);
    formData.append("pfile", pfile);

    const response = await axios.post("/exam_manag_api/student.php", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(formData);
    setMessage("Student inserted :)");
    setTimeout(() => {
      navigate("/student");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };

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
