import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div className="history-container" id="history">
      <h1>Timeline</h1>
      <div className="container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2023"
            iconStyle={{ background: '#CB6015', color: 'rgb(203,96,21)' }}
            icon={<FontAwesomeIcon icon={faUserGraduate} />}
          >
            <h3 className="vertical-timeline-element-title">The University of Texas</h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
                Graduated from The University of Texas at Austin with a Bachelor of Business Administration (BBA) in Management Information Systems (MIS).
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - Present"
            iconStyle={{ background: 'rgb(89, 0, 190)', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">HEB eStore</h3>
            <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
            <p>
              Excel
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;