import React from "react";
import "../styles/About.scss";
import Affogato from "../assets/Affogato.jpg";

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
          <img src={Affogato} alt="Profile Pic" />
        </div>
        <div className="profile-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
            amet mauris et turpis efficitur rhoncus. Donec eget dui mauris.
            Aenean nec dui commodo, finibus lorem vitae, commodo est. Sed et
            vehicula ex, in feugiat enim. Fusce interdum justo lorem. Phasellus
            id pharetra elit. Morbi ut vulputate nunc. Nulla in nisl ligula. Sed
            bibendum tincidunt dolor, nec vulputate mi dictum at. Proin luctus
            varius interdum. Sed eget enim sit amet dolor volutpat condimentum.
            Phasellus eget nisl arcu. Morbi et tempus tellus, sit amet luctus
            ex. Cras ipsum massa, commodo vitae dui vitae, interdum egestas
            dolor. Curabitur vitae neque ac libero ultricies sollicitudin.
            Suspendisse quis massa gravida, convallis mauris eu, sagittis metus.
            Fusce sed quam sit amet nulla dictum ullamcorper ut ut neque.
          </p>
          <p>
            {" "}
            Curabitur tempor commodo eros, at commodo quam rhoncus et. Quisque
            fringilla nulla nec felis consectetur, quis finibus erat rhoncus.
            Aliquam erat volutpat. Sed vehicula metus sed arcu malesuada
            pretium. Aliquam rhoncus purus id gravida molestie. Nam nisl erat,
            bibendum gravida nulla malesuada, pellentesque tincidunt massa. Duis
            elementum turpis sem, at posuere lectus efficitur quis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
