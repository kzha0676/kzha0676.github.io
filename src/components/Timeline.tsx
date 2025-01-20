import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Timeline</h1>
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
            {/* <p>
              Full-stack Web Development, GenAI/LLM, Project Management, Business Development
            </p> */}
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
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