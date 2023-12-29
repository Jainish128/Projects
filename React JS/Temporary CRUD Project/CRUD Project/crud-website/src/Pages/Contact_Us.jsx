import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact_Us() {

  // ==================== Send Message to Admin/Employee (POST)[JSON-Server] -> START ====================
  var d = new Date();
  var when_sended = `📅${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ⌚${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const [formValue, setFormValue] = useState({
    messanger_name: "",
    messanger_email: "",
    messange_subject: "",
    messange: ""
  });

  const inputing_values = (j) => {
    setFormValue({ ...formValue, id: d.getTime().toString(), sended_at:when_sended, [j.target.name]:j.target.value });
  };

  const Validation = () => {
    var result = true;
    if (formValue.messanger_name == "") 
    {
      toast.error('Username is required for Contact US.');
      result = false;  
    }
    if (formValue.messanger_email == "") 
    {
      toast.error('Your Email ID is required for Contact US.');
      result = false;  
    }
    if (formValue.messange_subject == "") 
    {
      toast.error('Message Subject is required for Contact US.');
      result = false;  
    }
    if (formValue.messange == "") 
    {
      toast.error('Message is required for Contact US.');
      result = false;  
    }
    return result;
  };

  const onSend = async(p) => {
    p.preventDefault();
    if (Validation()) 
    {
      const resp = await axios.post(`http://localhost:3000/messages`, formValue);
      if (resp.status == 201) 
      {
        toast.success('Message Sended Successfully.', {
          position: toast.POSITION.TOP_CENTER
        });
        setFormValue({ ...formValue,  messanger_name: "", messanger_email: "", messange_subject: "", messange: "" });
      }  
    }
  }
  // ==================== Send Message to Admin/Employee (POST)[JSON-Server] -> END ====================

  return (
    <div>
      {/* Start Contact Us  */}
      <div className="contact-box-main">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-4 col-sm-12">
              <div className="contact-info-left">
                <h2>CONTACT INFO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent urna diam, maximus ut ullamcorper quis, placerat id
                  eros. Duis semper justo sed condimentum rutrum. Nunc tristique
                  purus turpis. Maecenas vulputate. 
                </p>
                <ul>
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Address: Michael I. Days 3756 <br />
                      Preston Street Wichita,
                      <br /> KS 67213 
                    </p>
                  </li>s
                  <li>
                    <p>
                      <i className="fas fa-phone-square" />
                      Phone: <a href="tel:+1-888705770">+1-888 705 770</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope" />
                      Email: 
                      <a href="mailto:contactinfo@gmail.com">
                        contactinfo@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-sm-12">
              <div className="contact-form-right">
                <h2>GET IN TOUCH</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce
                  in metus ac ex venenatis ultricies at cursus mauris.
                </p>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                          name="messanger_name"
                          onChange={inputing_values}
                          value={formValue.messanger_name}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email id"
                          name="messanger_email"
                          onChange={inputing_values}
                          value={formValue.messanger_email}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Message Subject"
                          name="messange_subject"
                          onChange={inputing_values}
                          value={formValue.messange_subject}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={""}
                          placeholder="Enter Your Message"
                          name="messange"
                          onChange={inputing_values}
                          value={formValue.messange}
                        />
                      </div>
                      <div className="submit-button text-center">
                        <button
                          className="btn hvr-hover"
                          id="submit"
                          type="submit"
                          onClick={onSend}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* End Cart */}
    </div>
  );
}

export default Contact_Us;
