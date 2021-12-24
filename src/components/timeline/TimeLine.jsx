import React from "react";
import "./timeLine.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimeLine = () => {
  return (
    <div className="p-5 bg">
      <div className="px-4 py-2 my-4 text-center">
        {/* <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
        <h1 className="header-title-section">Susunan Acara</h1>
        <div className="col-lg-6 mx-auto">
          <p className="header-desc-section">Perjalanan selama 11 tahun</p>
        </div>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent className="date-timeline">
            <p className="date-timeline">08.00</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="detail-timeline">Akad Nikah</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <p className="date-timeline">09.30</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="detail-timeline">Acara Adat Jawa</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p className="date-timeline">10.30</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="detail-timeline">Hiburan (Tari Gambyong)</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p className="date-timeline">11.00</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="detail-timeline">Resepsi</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
