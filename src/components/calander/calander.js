import moment from "moment";
import React, { useState } from "react";
import Header from "./header";
import RenderDayView from "./views/dayView";
import RenderMonthView from "./views/monthView";
import RenderWeekView from "./views/weekView";
import RenderYearView from "./views/yearView";
const CustomCalendar = () => {
    
  const [openModal, setOpenModal] = useState(false);
  const [openMeet , setOpenMeet] = useState(false)
  const[openMeetSingle , setOpenMeetSingle] = useState(false)
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedEventsSingle, setSelectedEventsSingle] = useState([]);
  const [view, setView] = useState("Day"); 
  const [currentDate, setCurrentDate] = useState(moment()); 
  const eventData = [
    {
        id: 1,
        summary: "1st Round",
        desc: "1st Round",
        start: "2025-01-22T18:00:00+05:30",
        end: "2025-01-22T18:40:00+05:30",
        attendees: null,
        status: null,
        comment: null,
        score: {
          P: 8,
        },
        link: "http://www.hhh.com",
        user_det: {
          id: 1,
          question_score: null,
          status: null,
          candidate: {
            id: 1,
            candidate_firstName: "mohan",
            candidate_lastName: "raj",
            candidateGender: "male",
            candidateComment: "",
            candidate_email: "mohanrajk@dataterrain.com",
          },
          handled_by: {
            id: 3,
            last_login: null,
            userEmail: "vinodhini_hr@dataterrain.com",
            username: "vinodhini_hr",
            firstName: "Vinodhini",
            lastName: "HR",
            userRole: "hr_employee",
          },
          job_id: {
            id: 11,
            jobRequest_Title: "django developer",
            jobRequest_Role: "software engineer",
            jobRequest_KeySkills: "django",
            jobRequest_Description: "asfffasf",
          },
        },
        job_id: {
          id: 11,
          jobRequest_Title: "django developer",
          jobRequest_Role: "software engineer",
          jobRequest_KeySkills: "django",
          jobRequest_Description: "asfffasf",
        },
      },
      {
        id: 2,
        summary: "Test",
        desc: "Test",
        start: "2025-01-22T18:00:00+05:30",
        end: "2025-01-22T18:40:00+05:30",
        attendees: null,
        status: null,
        comment: null,
        score: {
          p: 7,
        },
        link: "http://www.hhh.com",
        user_det: {
          id: 1,
          question_score: null,
          status: null,
          candidate: {
            id: 1,
            candidate_firstName: "mohan",
            candidate_lastName: "raj",
            candidateGender: "male",
            candidateComment: "",
            candidate_email: "mohanrajk@dataterrain.com",
          },
          handled_by: {
            id: 3,
            last_login: null,
            userEmail: "vinodhini_hr@dataterrain.com",
            username: "vinodhini_hr",
            firstName: "Vinodhini",
            lastName: "HR",
            userRole: "hr_employee",
          },
          job_id: {
            id: 11,
            jobRequest_Title: "django developer",
            jobRequest_Role: "software engineer",
            jobRequest_KeySkills: "django",
            jobRequest_Description: "asfffasf",
          },
        },
        job_id: {
          id: 11,
          jobRequest_Title: "django developer",
          jobRequest_Role: "software engineer",
          jobRequest_KeySkills: "django",
          jobRequest_Description: "asfffasf",
        },
      },
      {
        id: 3,
        summary: "2nd Round",
        desc: "2nd Round",
        start: "2025-01-23T20:00:00+05:30",
        end: "2025-01-23T21:00:00+05:30",
        attendees: null,
        status: null,
        comment: null,
        score: {
          o: 6,
        },
        link: "http://www.hhh.com",
        user_det: {
          id: 1,
          question_score: null,
          status: null,
          candidate: {
            id: 1,
            candidate_firstName: "mohan",
            candidate_lastName: "raj",
            candidateGender: "male",
            candidateComment: "",
            candidate_email: "mohanrajk@dataterrain.com",
          },
          handled_by: {
            id: 3,
            last_login: null,
            userEmail: "vinodhini_hr@dataterrain.com",
            username: "vinodhini_hr",
            firstName: "Vinodhini",
            lastName: "HR",
            userRole: "hr_employee",
          },
          job_id: {
            id: 11,
            jobRequest_Title: "django developer",
            jobRequest_Role: "software engineer",
            jobRequest_KeySkills: "django",
            jobRequest_Description: "asfffasf",
          },
        },
        job_id: {
          id: 11,
          jobRequest_Title: "django developer",
          jobRequest_Role: "software engineer",
          jobRequest_KeySkills: "django",
          jobRequest_Description: "asfffasf",
        },
      },
  ];
  const renderView = () => {
    if (view === "Day") {
      return (
        <RenderDayView currentDate={currentDate} eventData={eventData} setOpenModal={setOpenModal} setSelectedEvents={setSelectedEvents} openModal={openModal} selectedEvents={selectedEvents} openMeet={openMeet} setOpenMeet={setOpenMeet} setSelectedEventsSingle={setSelectedEventsSingle} selectedEventsSingle={selectedEventsSingle} setOpenMeetSingle={setOpenMeetSingle} openMeetSingle={openMeetSingle}/>
      );
    }
    if (view === "Week") {
      return <RenderWeekView currentDate={currentDate} eventData={eventData} setOpenModal={setOpenModal} setSelectedEvents={setSelectedEvents} openModal={openModal} selectedEvents={selectedEvents} openMeet={openMeet} setOpenMeet={setOpenMeet} setSelectedEventsSingle={setSelectedEventsSingle} selectedEventsSingle={selectedEventsSingle} setOpenMeetSingle={setOpenMeetSingle} openMeetSingle={openMeetSingle}/>
    }
    if (view === "Month") {
      return <RenderMonthView currentDate={currentDate} eventData={eventData} setOpenModal={setOpenModal} setSelectedEvents={setSelectedEvents} openModal={openModal} selectedEvents={selectedEvents} openMeet={openMeet} setOpenMeet={setOpenMeet} setSelectedEventsSingle={setSelectedEventsSingle} selectedEventsSingle={selectedEventsSingle} setOpenMeetSingle={setOpenMeetSingle} openMeetSingle={openMeetSingle}/>;
    }
    if (view === "Year") {
      return <RenderYearView currentDate={currentDate} eventData={eventData} setOpenModal={setOpenModal} setSelectedEvents={setSelectedEvents} openModal={openModal} selectedEvents={selectedEvents} openMeet={openMeet} setOpenMeet={setOpenMeet} setSelectedEventsSingle={setSelectedEventsSingle} selectedEventsSingle={selectedEventsSingle} setOpenMeetSingle={setOpenMeetSingle} openMeetSingle={openMeetSingle}/>;
    }
  };

  return (
    <div>
      <Header view={view} setView={setView} currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      {/* Content */}
      <div style={{ marginTop: "80px" }}>{renderView()}</div>
    </div>
  );
};

export default CustomCalendar;
