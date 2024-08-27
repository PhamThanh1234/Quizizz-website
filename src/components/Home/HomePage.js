import videoHomepag from "../../assets/video-homepage.mp4";
import React from "react";
import "./Homepage.css"

const HomePage = (props) => {
  const videoRef = React.createRef();
  

  return (
    <div className="homepage-container">
       <div className="homepage-container-video">
          <video
            
            ref={videoRef}
            loop
            muted
            controls={false}
            onLoadedData={() => videoRef.current.play()}
          >
            <source src={videoHomepag} type="video/mp4" />
          </video>
       </div>
       <div className="homepage-container-content">
            <div className="content">
            <h1>Make forms
            worth filling out</h1>
            <p><span>Get more data—like signups, feedback, and anything 
              else—with forms designed to be refreshingly different.</span></p>

            
            </div>
            <a href="/">
            <button className="cssbuttons-io-button" >
                 
                 Get started
                 
                <div className="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
              </a>
           
       </div>
    </div>
  );
};

export default HomePage;