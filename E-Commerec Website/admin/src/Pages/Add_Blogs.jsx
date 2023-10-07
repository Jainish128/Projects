import React from "react";

function Add_Blogs() {
  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Blogs </h1>
              <h1 className="page-subhead-line">
                Add Blogs in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-primary">
                <div className="panel-heading"> Add Blogs </div>
                <div className="panel-body">
                  <form role="form">

                  <div className="form-group">
                      <label> Blog Title </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Blog Title here..."
                      />
                    </div>

                    <div className="form-group">
                      <label> Blog Description </label>
                      <textarea class="form-control" rows="20" id="comment" name="text" placeholder="Enter Blog Description here..."></textarea>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-4">
                        Upload Blog Related Images
                      </label>
                      <div className>
                        <div
                          className="fileupload fileupload-new"
                          data-provides="fileupload"
                        >
                          <div
                            className="fileupload-preview thumbnail"
                            style={{ width: 250, height: 200 }}
                          />
                          <div>
                            <span className="btn btn-file btn-success">
                              <span className="fileupload-new">
                                Select Image
                              </span>
                              <span className="fileupload-exists">Change</span>
                              <input type="file" multiple />
                            </span> &nbsp;
                            <a
                              href="#"
                              className="btn btn-danger fileupload-exists"
                              data-dismiss="fileupload"
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary ">
                        Add Blog
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

export default Add_Blogs;
