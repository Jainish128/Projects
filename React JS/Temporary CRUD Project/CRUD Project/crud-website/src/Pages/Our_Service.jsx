import React from "react";
import Service_Block from "../Components/Service_Block";
import Employee_Card from "../Components/Employee_Card";

function Our_Service() {
  return (
    <div>
      <div className="container">


        <div className="row my-5">
          <Service_Block
          service_title="OUR MISSION"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Service_Block
          service_title="OUR VISION"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Service_Block
          service_title="OUR PHILOSOPHY"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Service_Block
          service_title="We are Trusted"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Service_Block
          service_title="We are Professional"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Service_Block
          service_title="OUR STORIES"
          service_desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="row my-4">
          <div className="col-12">
            <h2 className="noo-sh-title">
              Meet our team
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
  );
}

export default Our_Service;
