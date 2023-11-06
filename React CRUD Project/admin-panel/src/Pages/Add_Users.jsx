import React from "react";

function Add_Users() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Users </h1>
              <h1 className="page-subhead-line">
                Add Users in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-warning">
                <div className="panel-heading"> Add Users </div>
                <div className="panel-body">
                  <form role="form">
                    <div className="form-group">
                      <label> Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Name here..."
                      />
                    </div>

                    <div className="form-group">
                      <label> Email </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email ID here..."
                      />
                    </div>

                    <div className="form-group">
                      <label> Password </label>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter Password here..."
                      />
                    </div>

                    <div className="form-group">
                      <label> Mobile Number </label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Mobile Number here..."
                      />
                    </div>

                    <div className="form-group">
                      <label> Gender </label>
                      <div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            name="optradio"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="radio1">
                             
                            &nbsp; Male 
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio2"
                            name="optradio"
                            defaultValue="option2"
                          />
                          <label className="form-check-label" htmlFor="radio2">
                             
                            &nbsp; Female 
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                         
                        Countries : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      </label>
                      <select class="form-select form-select-sm mt-3">
                        <option> &nbsp; Select Country &nbsp; </option>
                        <option> India </option>
                        <option> Canada </option>
                        <option> USA </option>
                        <option> Switzerland </option>
                        <option> Australia </option>
                        <option> Dubai </option>
                        <option> New Zealand </option>
                        <option> Shrilanka </option>
                        <option> Bangladesh </option>
                        <option> Bhutan </option>
                      </select>
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-warning ">
                        Add User
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Add_Users;
