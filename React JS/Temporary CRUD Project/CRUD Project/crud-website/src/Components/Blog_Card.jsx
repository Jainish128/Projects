import React from "react";

function Blog_Card() {
  return (
    <div>
      <div classname="col-md-4 col-lg-3 col-xl-3 col-sm-12" style={{ width: '400px' }}>
        <div classname="blog-box">
          <div classname="blog-img">
            <img classname="img-fluid" src="images/blog-img.jpg" width={'100%'} alt='Blog Image' />
          </div>
          <div classname="blog-content">
            <div classname="title-blog">
              <h3 className="pt-4">Fusce in augue non nisi fringilla</h3>
              <p className="text-justify">
                Nulla ut urna egestas, porta libero id, suscipit orci. Quisque
                in lectus sit amet urna dignissim feugiat. Mauris molestie
                egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent
                laoreet lacinia elit id lobortis.
              </p>
            </div>
            <ul classname="option-blog">
              <li>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Likes"
                >
                  <i classname="far fa-heart"></i>
                </a>
                <i classname="far fa-heart"></i>
              </li>
              <i classname="far fa-heart">
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Views"
                  >
                    <i classname="fas fa-eye"></i>
                  </a>
                  <i classname="fas fa-eye"></i>
                </li>
                <i classname="fas fa-eye">
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Comments"
                    >
                      <i classname="far fa-comments"></i>
                    </a>
                    <i classname="far fa-comments"></i>
                  </li>
                  <i classname="far fa-comments"></i>
                </i>
              </i>
            </ul>
            <i classname="far fa-heart">
              <i classname="fas fa-eye">
                <i classname="far fa-comments"></i>
              </i>
            </i>
          </div>
          <i classname="far fa-heart">
            <i classname="fas fa-eye">
              <i classname="far fa-comments"></i>
            </i>
          </i>
        </div>
        <i classname="far fa-heart">
          <i classname="fas fa-eye">
            <i classname="far fa-comments"></i>
          </i>
        </i>
      </div>
      <i classname="far fa-heart">
        <i classname="fas fa-eye">
          <i classname="far fa-comments"></i>
        </i>
      </i>
    </div>
  );
}

export default Blog_Card;
