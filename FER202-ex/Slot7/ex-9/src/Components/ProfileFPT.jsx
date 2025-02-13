import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const ProfileFPT = () => {
  return (
    <div class="ex5">
      <div class="container">
        <div class="header" style={{ background: "orange" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            alt=""
            class="mx-auto d-block pt-3 mt-3"
            style={{ background: "white", width: "700px" }}
          />
          <div class="navbar navbar-expand-sm justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="body my-5">
          <div class="content">
            <h2 class="p-3 text-center fw-bolder">About</h2>
            <p class="my-3 text-center">
              this is the About section of the website.
            </p>

            <h2 class="p-3 text-center fw-bolder">Contact</h2>
            <p class="my-3 text-center">
              For any inquiries, please contact us at example@example.com.
            </p>
          </div>
        </div>
        <div class="footer" style={{ background: "rgb(242, 202, 129)" }}>
          <div class="footerContent">
            <p class="text-white text-center p-3">
              C 2023 website. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ProfileFPT);
