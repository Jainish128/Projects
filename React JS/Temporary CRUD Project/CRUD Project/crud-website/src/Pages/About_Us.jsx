import React from "react";
import Service_Block from "../Components/Service_Block";
import Employee_Card from "../Components/Employee_Card";

function About_Us() {
  return (
    <div>
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                We are <span>ThewayShop</span>
              </h2>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                <img
                  className="img-thumbnail img-fluid"
                  src="images/about-img.jpg"
                  alt
                />
              </div>
            </div>
          </div>

          {/* Service Blocks */}
          <div className="row my-5">

            <Service_Block
            service_title="We are Trusted"
            service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Service_Block
            service_title="We are Professional"
            service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            
            <Service_Block
            service_title="We are Expert"
            service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

          </div>


          {/* Meet Our Employees Team */}
          <div className="row my-4">
            <div className="col-12">
              <h2 className="noo-sh-title"> 
              Meet Our Team 
              </h2>
            </div>

            <Employee_Card
            name='Williamson'
            img='images/img-1.jpg'
            jobrole='Web Designer'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.'
            />

            <Employee_Card
            name='Kristiana'
            img='images/img-2.jpg'
            jobrole='Front-End Developer'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.'
            />

            <Employee_Card
            name='Steve Thomas'
            img='images/img-3.jpg'
            jobrole='Back-End Developer'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.'
            />

            <Employee_Card
            name='Williamson (2)'
            img='images/img-1.jpg'
            jobrole='Full-Stack Developer'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.'
            />

          </div>

        </div>
      </div>
    </div>
    
  );
}

export default About_Us;
