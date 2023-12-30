import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userFetch, deleteData, userSingleFetch, updateData } from "../../userReducer";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

function Manage_data() {

  const dispatch = useDispatch();
  // const redirect = useNavigate();

  const { alluser, singleuser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(userFetch());
  }, [alluser]);

  const deleteHandle = (id) => {
    dispatch(deleteData(`http://localhost:3000/user/${id}`));
    toast.success("User Data Deleted Successfully.");
    dispatch(userFetch());
    // redirect('/Manage_Data');
  };

  // UPDATE Data
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const editHandle = (id) => {
    dispatch(userSingleFetch(id));
    setFormValue(singleuser);
  };

  const changeHandle = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateData(`http://localhost:3000/user/${formValue.id}`, formValue)
    );
    dispatch(userFetch());
  };




  

  return (
    <div>
      <div className="container mt-3">
        <h2 className="mb-4 text-center"> MANAGE DATA </h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {alluser.map((value) => {
              return (
                <tr>
                  <td> {value.id} </td>
                  <td> {value.name} </td>
                  <td> {value.email} </td>
                  <td> {value.mobile} </td>
                  <td> {value.password} </td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-primary" onClick={()=> editHandle(value.id)} data-bs-toggle="modal" data-bs-target="#myModal"> Edit </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandle(value.id)}
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

        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title"> Edit User Details </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                />
              </div>
              {/* Modal body */}
              <div className="modal-body">

              <div className="row">

                <div className="col-md-8 offset-md-2">
                  <form>

                  <div className="mb-3">
                    <label> Name </label>
                    <input type="text" value={formValue.name} onChange={changeHandle} className="form-control" placeholder="Enter Name" name="name" />
                  </div>

                  <div className="mb-3">
                    <label> Email </label>
                    <input type="email" value={formValue.email} onChange={changeHandle} className="form-control" placeholder="Enter Email id" name="email" />
                  </div>

                  <div className="mb-3">
                    <label> Mobile Number </label>
                    <input type="text" value={formValue.mobile} onChange={changeHandle} className="form-control" placeholder="Enter Mobile Number" name="mobile" />
                  </div>

                  <div className="mb-3">
                    <label> Password </label>
                    <input type="text" value={formValue.password} onChange={changeHandle} className="form-control" placeholder="Enter Password" name="password" />
                  </div>

                  </form>
                </div>

              </div>

              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-success" onClick={submitHandle}  data-bs-dismiss="modal"> Save </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" > Close </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_data;
