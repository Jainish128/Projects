import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { toast } from "react-toastify";

function Main() {
  // =============== Show Users Data -> START ===============
  useEffect(() => {
    fetch_users();
  });

  const [usersData, setUsersData] = useState([]);

  const fetch_users = async () => {
    const resp = await axios.get(`http://localhost:3000/users`);
    setUsersData(resp.data);
  };
  // =============== Show Users Data -> END ===============





  // =============== Delete Users Data -> START ===============
  const delete_user = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/users/${id}`);
    if (resp.status == 200) {
      toast.success("User deleted Successfully.");
      fetch_users();
    }
  };
  // =============== Delete Users Data -> END ===============





  // =============== Add Users Data -> START ===============
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  var d = new Date();
  const created = ` 
    📅${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()} `;

  const inputing_value = (j) => {
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      created_at: created,
      [j.target.name]: j.target.value,
    });
    console.log(formValue);
  };

  const Validation = () => {
    var result = true;
    if (formValue.name == "") {
      toast.error("Name is required to Add Data.");
      result = false;
    }
    if (formValue.email == "") {
      toast.error("Email ID is required to Add Data.");
      result = false;
    }
    if (formValue.mobile == "") {
      toast.error("Mobile Number is required to Add Data.");
      result = false;
    }
    if (formValue.password == "") {
      toast.error("Password is required to Add Data.");
      result = false;
    }
    return result;
  };

  const onUserAdd = async (p) => {
    p.preventDefault();
    if (Validation()) {
      const resp = await axios.post(`http://localhost:3000/users`, formValue);
      if (resp.status == 201) {
        toast.success("User Added Successfully.", {
          position: toast.POSITION.TOP_CENTER,
        });
        setFormValue({
          ...formValue,
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
      }
    }
  };
  // =============== Add Users Data -> END ===============





  // =============== Edit Users Data -> START ===============
  const [editFormValue, setEditFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [editID, setEditID] = useState("");

  const editData = async (id) => {
    const resp = await axios.get(`http://localhost:3000/users/${id}`);
    setEditFormValue(resp.data);
    setEditID(id);
  };

  const updated = `📅${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()} `;

  const changing_values = (s) => {
    setEditFormValue({ ...editFormValue, updated_at:updated, [s.target.name]:s.target.value });
    console.log(editFormValue);
  };

  const Validation_2 = () => {
    var result = true;
    if (editFormValue.name == "") {
      toast.error("Name is required to Add Data.");
      result = false;
    }
    if (editFormValue.email == "") {
      toast.error("Email ID is required to Add Data.");
      result = false;
    }
    if (editFormValue.mobile == "") {
      toast.error("Mobile Number is required to Add Data.");
      result = false;
    }
    if (editFormValue.password == "") {
      toast.error("Password is required to Add Data.");
      result = false;
    }
    return result;
  };

  const onSave = async(d) => {
    d.preventDefault();
    if (Validation_2()) 
    {
        const resp = await axios.patch(`http://localhost:3000/users/${editID}`, editFormValue);
        if (resp.status == "200") 
        {
            toast('User Data Edited Successfully.', { position: toast.POSITION.TOP_CENTER });
            setEditFormValue({ ...editFormValue, name: "", email: "", mobile: "", password: "" });
        }    
    }
  };
  // =============== Edit Users Data -> END ===============

  return (
    <div className="bg-light">
      <div className="container py-5">
        <h1 className="text-center mb-4"> ADD DATA </h1>
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <label> Name : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                onChange={inputing_value}
                value={formValue.name}
              />
            </div>
            <div className="form-group col-md-6">
              <label> Email : </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                onChange={inputing_value}
                value={formValue.email}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-md-6">
              <label> Mobile Number : </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Mobile Number"
                name="mobile"
                onChange={inputing_value}
                value={formValue.mobile}
              />
            </div>
            <div className="form-group col-md-6">
              <label> Password : </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                onChange={inputing_value}
                value={formValue.password}
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={onUserAdd}>
              {" "}
              Add Data{" "}
            </button>
          </div>
        </form>
      </div>

      <div className="container mt-5 pb-5">
        <h1 className="text-center mb-4"> MANAGE DATA </h1>
        <table className="data_table table table-bordered table-hover text-center">
          <thead>
            <tr>
              <th> #ID </th>
              <th> Name </th>
              <th> Email </th>
              <th> Mobile Number </th>
              <th> Password </th>
              <th> Created_at </th>
              <th> Update_at </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                        <td> 1 </td>
                        <td> Jainish Patel </td>
                        <td> jainish@gmail.com </td>
                        <td> 1122334455 </td>
                        <td> my_password </td>
                        <td> 28-12-23 | 13:23 </td>
                        <td> 30-12-23 | 16:30 </td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-sm btn-primary"> Edit </button>
                                <button className="btn btn-sm btn-danger"> Delete </button>
                            </div>
                        </td>
                    </tr> */}

            {usersData.map((value) => {
              return (
                <tr>
                  <td> {value.id} </td>
                  <td> {value.name} </td>
                  <td> {value.email} </td>
                  <td> {value.mobile} </td>
                  <td> {value.password} </td>
                  <td> {value.created_at} </td>
                  <td> {value.updated_at} </td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-primary" data-bs-toggle='modal' data-bs-target='#myModal' onClick={()=> editData(value.id)}> Edit </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => delete_user(value.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ---------- The Modal -> START ---------- */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title"> Edit Data </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label> Name :  </label>
                        <input type="text" className="form-control" placeholder="Enter your Name" name="name" onChange={changing_values} value={editFormValue.name} />
                    </div>
                    <div className="form-group mt-3">
                        <label> Email :  </label>
                        <input type="email" className="form-control" placeholder="Enter your Email" name="email" onChange={changing_values} value={editFormValue.email} />
                    </div>
                    <div className="form-group mt-3">
                        <label> Mobile Number :  </label>
                        <input type="number" className="form-control" placeholder="Enter your Mobile Number" onChange={changing_values} name="mobile" value={editFormValue.mobile} />
                    </div>
                    <div className="form-group mt-3">
                        <label> Password :  </label>
                        <input type="password" className="form-control" placeholder="Enter your Password" onChange={changing_values} name="password" value={editFormValue.password} />
                    </div>
                </form>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
                <button className="btn btn-success" data-bs-dismiss="modal" onClick={onSave}> Save </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" > Close </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- The Modal -> START ---------- */}
    </div>
  );
}

export default Main;
