import React from "react";
import "../styles/About.scss";
import me from "../assets/me.png";

function About() {
  return (
    <div className="About">
      <div className="Page-Title">
        <h1>
          <i>Ab</i>out
        </h1>
      </div>
      <div className="Content-Info">
        <div className="profile-pic">
          <img src={me} alt="Profile Pic" />
        </div>
        <div className="profile-content">
          <p>
            I am a software engineer specializing in{" "}
            <b>full stack web development</b> and <b>data analytics</b>. I
            studied Electrical and Electronics at BITS Pilani, India which paved
            the way for me to intern at Samsung Semiconductor India where I
            built real-time monitoring dashboards for the cross-functional Wi-Fi
            team to improve their connectivity performance. Currently I work at
            Zapcom Group Inc which is a B2B SaaS organization. Here I have
            developed softwares for clients in the travel & hospitality sector
            and loyalty program management systems.
          </p>
          <p>
            At this juncture of my career, I am actively working with data
            analytics to craft compelling narratives and solve real world
            problems, hardest of all being Education and Environment. I want to
            fulfill my role in{" "}
            <span className="background">
              creating a sustainable world -<i>one tech at a time</i>
            </span>
            .
          </p>
          <p>
            Outside work, I am deeply interested in policy making and
            international relations. Apart from that, I am an amateur historian
            on the lookout for opportunities to hone my knowledge. My favorite
            era of exploration is Ancient India (specifically the IVC, Mauryan
            and Gupta ages) and if you have any conspiracy theories, feel free
            to hit me up!
          </p>
          <p>
            By the way, I have a lot of interests which help me get confused on
            which one to pick for the day. Usually I watch movies and
            documentaries, look at the sky, play harmonica and cook good food.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
