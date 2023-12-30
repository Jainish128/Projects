import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userFetch, deleteData, userSingleFetch, updateData } from "../../userReducer";
import { fetchContact, userSingleContact } from "../../contactReducer";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

function Manage_Contact() {
  const dispatch = useDispatch();
  // const redirect = useNavigate();

  const { allcontact, singlecontact } = useSelector((state) => state.contactReducer);

  useEffect(() => {
    dispatch(fetchContact());
  }, [allcontact]);

  const deleteHandle = (id) => {
    dispatch(deleteData(`http://localhost:3000/contact/${id}`));
    toast.success("Message Deleted Successfully.");
    dispatch(fetchContact());
    // redirect('/Manage_Data');
  };

  // UPDATE Data
  const [formValue, setFormValue] = useState({
    id: "",
    name: "",
    email: "",
    message: ""
  });

  const editHandle = (id) => {
    dispatch(userSingleContact(id));
    setFormValue(singlecontact);
  };

  const changeHandle = (e) => {
    setFormValue({ ...formValue, [e.target.name]:e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      updateData(`http://localhost:3000/contact/${formValue.id}`, formValue)
    );
    dispatch(fetchContact());
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
            {allcontact.map((value) => {
              return (
                <tr>
                  <td> {value.id} </td>
                  <td> {value.name} </td>
                  <td> {value.email} </td>
                  <td> {value.message} </td>
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

       </div>
    </div>
  );
}

export default Manage_Contact;
