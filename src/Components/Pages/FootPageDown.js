import React from "react";
import "./FootPageDown.css";
import codeeditor from "../Images/codeeditor.gif";
import dynamicspaces from "../Images/dynamicspaces.gif";
import spacework from "../Images/spacework.png";
import greenBg from "../Images/greenbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const FootPageDown = () => {
  return (
    <>
      <div className="foot-page-down">
        <div>
          <h1>Code Editor</h1>
          <h3>
            With our online code editor, you can edit code and view the result
            in your browser
          </h3>
          <div className="image">
            <img src={codeeditor} alt="pic"></img>
            <a href="#html" className={`btn-green`}>
              Try Frontend Editor (HTML/CSS/JS)
            </a>
            <a href="#html" className={`btn-yellow`}>
              Try Backend Editor (Python/PHP/Java/C..)
            </a>
          </div>
        </div>
        <div className="foot-page-down2">
          <div>
            <h1>W3Schools Spaces</h1>
            <h3>
              If you want to create your own website, check out{" "}
              <span>W3Schools Spaces</span>.<br /> It is free to use, and does
              not require any setup:
            </h3>
            <div className="image">
              <img src={dynamicspaces} alt="pic"></img>
              <img className="image-2" src={spacework} alt="pic"></img>
              <div className="myBtn-green">
                <a href="#html" id={`btn-green1`}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="foot-page-down3">
          <div>
            <h1>My Learning</h1>
            <h3>
              Track your progress with our free "My Learning" program.
              <br />
              Log in to your account, and start earning points!
            </h3>
            <div className="image">
              <img src={greenBg} alt="pic"></img>
              <div className="myBtn-green2">
                <a href="#html" id={`btn-green2`}>
                  Sign Up for Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-page-down4">
        <h1>Become a PRO User</h1>
        <h3>And unlock powerful features:</h3>
        <div className="image">
          <p>
            <FontAwesomeIcon className="myIcon-tick" icon={faCircleCheck} />
            Browse W3Schools without ads
          </p>
          <p>
            <FontAwesomeIcon className="myIcon-tick" icon={faCircleCheck} />
            Website hosting (Includes <span>Spaces</span> PRO)
          </p>
          <p>
            <FontAwesomeIcon className="myIcon-tick" icon={faCircleCheck} />
            Access to our <span>HTML Video Tutorial</span>
          </p>
          <div className="myBtn-green3">
            <a href="#html" id={`btn-green3`}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
