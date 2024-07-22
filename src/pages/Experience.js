import React from "react";
import "../styles/Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { constants } from "../constants";

function Experience() {
  return (
    <div className="Experience">
      <div className="Page-Title">
        <h1>
          <i>Exp</i>erience
        </h1>
      </div>
      <div className="Experience-Container">
        <VerticalTimeline lineColor={constants.experienceStyle.yellowGold}>
          {constants.experience.map((arr) => {
            return (
              <VerticalTimelineElement
                key={arr.index}
                className="vertical-timeline-element--education"
                iconStyle={{
                  background: constants.experienceStyle.red,
                  color: constants.experienceStyle.white,
                }}
                contentStyle={{
                  boxShadow: `0 3px 0 ${constants.experienceStyle.red}`
                }}
                icon={arr.icon}
                date={arr.date}
              >
                <h3>{arr.title}</h3>
                <h4>{arr.subTitle}</h4>
                <p>{arr.description}</p>
                <div className="link-container">
                  {arr.evidence.length > 0 &&
                    arr.evidence.map((link) => {
                      return (
                        <button>
                          <a href={link.link}>{link.buttonText}</a>
                        </button>
                      );
                    })}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
