import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

function Profile() {
  // ---------- Fetch Data from Admin Panel to Profile Page ----------
  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState({});

  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/adminuser/${localStorage.getItem("userid")}`
    );
    // console.log(res.data);
    setData(res.data);
  };

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [editID, setEditID] = useState("");

  const editData = async (id) => {
    const res = await axios.get(`http://localhost:3000/adminuser/${id}`);
    setFormValue(res.data);
    setEditID(id);
  };

  const onchange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  };

  function validation() {
    var result = true;

    // ---------------< Name Validation >---------------
    if (formValue.name == "") {
      toast.error("Name is Required !");
      result = false;
    }
    // ---------------< Email Validation >---------------
    if (formValue.email == "") {
      toast.error("Email is Required !");
      result = false;
    }
    // ----------< Mobile Number Validation >----------
    if (formValue.mobile == "") {
      toast.error("Mobile Number is is Required !");
      result = false;
    }
    // ---------------< Password Validation >---------------
    if (formValue.password == "") {
      toast.error("Password is Required !");
      result = false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/adminuser/${editID}`,
        formValue
      );
      if (res.status == 200) {
        toast.success("Profile Update Successfully.");
        setFormValue({
          ...formValue,
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        fetch();
      }
    }
  };

  return (
    <div>
      <div>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-head-line"> Admin Profile </h1>
                <h1 className="page-subhead-line">
                  You can Manage your Profile in your Admin Website using this
                  Form.
                </h1>
              </div>
            </div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="panel panel-success">
                  <div className="panel-heading"> Manage Profile </div>
                  <div className="panel-body">
                    <table>
                      <tr>
                        <th> Name </th>
                        <th> : </th>
                        <td className="td"> {data.name} </td>
                      </tr>
                      <br />
                      <tr>
                        <th> Email </th>
                        <th> : </th>
                        <td className="td"> {data.email} </td>
                      </tr>
                      <br />
                      <tr>
                        <th> Mobile Number </th>
                        <th> : </th>
                        <td className="td"> {data.mobile} </td>
                      </tr>
                      <br />
                      <tr>
                        <th> Password </th>
                        <th> : </th>
                        <td className="td"> {data.password} </td>
                        {/* <td> <i class="fa fa-eye-slash"></i> </td> */}
                        {/* <td> <i className="fa fa-eye"></i> </td> */}
                      </tr>
                      <br />
                      <tr>
                        <td colSpan={3}>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-primary"
                            onClick={() => editData(data.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                          >
                            Edit Profile
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* -------------------------------------- Modal box for Profile Update -> START ----------------------------------------- */}

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {" "}
                            Edit Profile{" "}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>

                        <div className="modal-body">
                          <form>
                            <div className="mb-2">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                {" "}
                                Name :{" "}
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="recipient-name"
                                value={formValue.name}
                                onChange={onchange}
                              />
                            </div>

                            <div className="mb-2">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                {" "}
                                Email :{" "}
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="recipient-name"
                                value={formValue.email}
                                onChange={onchange}
                              />
                            </div>

                            <div className="mb-2">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                {" "}
                                Mobile Number :{" "}
                              </label>
                              <input
                                type="number"
                                name="mobile"
                                className="form-control"
                                id="recipient-name"
                                value={formValue.mobile}
                                onChange={onchange}
                              />
                            </div>

                            <div className="mb-2">
                              <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                              >
                                {" "}
                                Password :{" "}
                              </label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="recipient-name"
                                value={formValue.password}
                                onChange={onchange}
                              />
                            </div>
                          </form>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            {" "}
                            Close{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={onsubmit}
                            data-bs-dismiss="modal"
                          >
                            {" "}
                            Save{" "}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* -------------------------------------- Modal box for Profile Update -> END ----------------------------------------- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /. PAGE INNER  */}
        </div>
        {/* /. PAGE WRAPPER  */}
      </div>
    </div>
  );
}

export default Profile;
