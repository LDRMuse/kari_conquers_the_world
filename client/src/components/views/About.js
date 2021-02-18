import React from "react";
import { SocialMedia } from "./SocialMedia"

import kari from "../../images/army1.jpg";


export const About = () => {
  return (
    <>
      <div className="mainBody">
        <div id="kari-image" className="col-3 col-s-3 menu">
          <ul>
            <img className="kariImage" src={kari} alt="logo" />
          </ul>
        </div>

        <div className="col-3 col-s-12">
          <h1 className="homeH1">About Kari</h1>
          <section className="kari-about-paragraph">
            <p>
              Kari is the owner and operator of{" "}
              <em>Monroe Permanent Cosmetics</em>. She is a licensed
              cosmetologist, licensed cosmetic tattoo artist and has been in the
              beauty industry for over 15+ years. Kari is CPR and BBP Certified.
            </p>
            <p>
              <strong>
                When not slaying brows and making the world beautiful, Kari is
                spending time with her 5 boys, adding to her YouTube channel or
                tending to her duties in the National Guard.
              </strong>
            </p>
          </section>
        </div>
      </div>

      <SocialMedia />
      <div className="menu-header"></div>



    </>
  );
};
