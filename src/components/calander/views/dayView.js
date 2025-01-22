import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Badge,
  Box,
  Button,
  Dialog, DialogContent,
  DialogTitle, Grid,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import moment from "moment";
import React from "react";
import Meet from "../../../assets/images/meet.png";
import useStyle from "../style";
const RenderDayView = ({
  currentDate,
  eventData,
  setOpenModal,
  setSelectedEvents,
  openModal,
  selectedEvents,
  setOpenMeet,
  openMeet,
  selectedEventsSingle,
  setSelectedEventsSingle,
  openMeetSingle,
  setOpenMeetSingle,
}) => {
  const classes = useStyle();
  const getEventsForDay = (day) => {
    return eventData.filter((event) => moment(event.start).isSame(day, "day"));
  };
  const events = getEventsForDay(currentDate);

  const handleEventClick = (events) => {
    if (events.length > 1) {
      setSelectedEvents(events);
      setOpenModal(true);
    } else {
      setOpenMeet(true);
      setSelectedEvents(events);
      console.log(selectedEvents);
    }

    console.log(events);
    console.log(selectedEvents);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenMeet(false);
    setOpenMeetSingle(false);
  };
  const handleMeetLink = (event) => {
    setOpenMeetSingle(true);
    console.log(event);
    setSelectedEventsSingle([event]);
  };
  console.log(selectedEventsSingle);
  return (
    <Grid container>
      <Grid item xs={2}>
        <Stack>
          {Array.from({ length: 24 }).map((_, i) => (
            <Typography
              key={i}
              variant="body2"
              style={{
                height: "100px",
                textAlign: "center",
                borderBottom: "1px solid #ddd",
                lineHeight: "60px",
              }}
            >
              {i % 12 === 0 ? 12 : i % 12} {i < 12 ? "AM" : "PM"}
            </Typography>
          ))}
        </Stack>
      </Grid>

      <Grid item xs={10}>
        <Stack>
          {Array.from({ length: 24 }).map((_, i) => {
            const eventsInHour = events.filter((event) => {
              const eventStart = moment(event.start);
              return eventStart.hour() === i;
            });

            return (
              <div
                key={i}
                style={{
                  height: "100px",
                  borderBottom: "1px solid #ddd",
                  background: i % 2 === 0 ? "#f9f9f9" : "#fff",
                  position: "relative",
                }}
              >
                {eventsInHour.length > 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "10px",
                      padding: "5px",
                      background: "#fff",
                      borderRadius: "4px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                      cursor: "pointer",
                      fontWeight: 600,
                      zIndex: 10,
                      fontSize: "12px",
                      lineHeight: "18px",
                      borderLeft: "7px solid blue",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#D1EEFD")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff")
                    }
                    onClick={() => handleEventClick(eventsInHour)}
                  >
                    {eventsInHour[0].job_id.jobRequest_Title}
                    <div>
                      Interviewer:{" "}
                      {eventsInHour[0].user_det.handled_by.firstName}
                    </div>
                    <div>
                      Time: {moment(eventsInHour[0].start).format("h:mm A")} -{" "}
                      {moment(eventsInHour[0].end).format("h:mm A")}
                    </div>
                    {eventsInHour.length > 1 && (
                      <Badge
                        badgeContent={eventsInHour.length}
                        color="warning"
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          zIndex: 20,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </Stack>
      </Grid>

      {/* Modal for events */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogTitle sx={{ paddingBottom: 0 }}>
            Meetings: Events for{" "}
            {moment(selectedEvents[0]?.start).format("h:mm A")}
          </DialogTitle>
          <DialogTitle sx={{ paddingBottom: 0 }}>
            <IconButton onClick={handleCloseModal}>
              <HighlightOffOutlinedIcon sx={{ color: "red" }} />
            </IconButton>
          </DialogTitle>
        </div>

        <DialogContent>
          <Stack spacing={2}>
            {selectedEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D1EEFD")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
                onClick={() => handleMeetLink(event)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {event.job_id.jobRequest_Title}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <BorderColorIcon sx={{ fontSize: "18px" }} />
                    </IconButton>
                    <IconButton size="small">
                      <DeleteIcon sx={{ color: "red", fontSize: "18px" }} />
                    </IconButton>
                  </div>
                </div>
                <div style={{ display: "flex", marginBlock: "5px" }}>
                  <div>{event.summary}</div>
                  <div style={{ marginInline: "5px" }}>|</div>
                  <div>Interviewer: {event.user_det.handled_by.firstName}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>Date: {moment(event.start).format("DD MMMM YYYY")}</div>
                  <div style={{ marginInline: "5px" }}>|</div>
                  <div>
                    Time: {moment(event.start).format("h:mm A")} -{" "}
                    {moment(event.end).format("h:mm A")}
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openMeet}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleCloseModal}>
            <HighlightOffOutlinedIcon sx={{ color: "red" }} />
          </IconButton>
        </div>

        <DialogContent>
          <Stack spacing={2}>
            {selectedEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    <Typography className={classes.meetFont}>
                      <div>{event.summary}</div>
                      Interview with:{" "}
                      {event.user_det.candidate.candidate_firstName}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Position: {event.job_id.jobRequest_Title}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Created By: {event.user_det.handled_by.firstName}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview Date:{" "}
                      {moment(event.start).format("DD MMMM YYYY")}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview Time: {moment(event.start).format("h:mm A")} -{" "}
                      {moment(event.end).format("h:mm A")}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview via: Google Meet
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #006DBF",
                        borderRadius: "8px",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#f9f9f9",
                        width: "fit-content",
                        marginBlock: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                          fontSize: "16px",
                          color: "#006DBF",
                          paddingLeft: "10px",
                        }}
                      >
                        Resume.docx
                      </Typography>
                      <Box sx={{ marginLeft: "15px" }}>
                        <IconButton>
                          <RemoveRedEyeIcon color="primary" />
                        </IconButton>
                        <IconButton>
                          <FileDownloadIcon color="primary" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        border: "1px solid #006DBF",
                        borderRadius: "8px",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#f9f9f9",
                        width: "fit-content",
                        marginBlock: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                          fontSize: "16px",
                          color: "#006DBF",
                          paddingLeft: "10px",
                        }}
                      >
                        Adharcard
                      </Typography>
                      <Box sx={{ marginLeft: "15px" }}>
                        <IconButton>
                          <RemoveRedEyeIcon color="primary" />
                        </IconButton>
                        <IconButton>
                          <FileDownloadIcon color="primary" />
                        </IconButton>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={Meet}
                      style={{
                        width: "100px",
                        border: "1px solid #ddd",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    />
                    <div>
                      <Button
                        href={event.link}
                        target="_blank"
                        variant="contained"
                      >
                        JOIN
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openMeetSingle}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleCloseModal}>
            <HighlightOffOutlinedIcon sx={{ color: "red" }} />
          </IconButton>
        </div>

        <DialogContent>
          <Stack spacing={2}>
            {selectedEventsSingle.map((eventd, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                      borderRight: "1px solid #ddd",
                    }}
                  >
                    <Typography className={classes.meetFont}>
                      <div>{eventd.summary}</div>
                      Interview with:{" "}
                      {eventd.user_det.candidate.candidate_firstName}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Position: {eventd.job_id.jobRequest_Title}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Created By: {eventd.user_det.handled_by.firstName}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview Date:{" "}
                      {moment(eventd.start).format("DD MMMM YYYY")}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview Time: {moment(eventd.start).format("h:mm A")} -{" "}
                      {moment(eventd.end).format("h:mm A")}
                    </Typography>
                    <Typography className={classes.meetFont}>
                      Interview via: Google Meet
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #006DBF",
                        borderRadius: "8px",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#f9f9f9",
                        width: "fit-content",
                        marginBlock: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                          fontSize: "16px",
                          color: "#006DBF",
                          paddingLeft: "10px",
                        }}
                      >
                        Resume.docx
                      </Typography>
                      <Box sx={{ marginLeft: "15px" }}>
                        <IconButton>
                          <RemoveRedEyeIcon color="primary" />
                        </IconButton>
                        <IconButton>
                          <FileDownloadIcon color="primary" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        border: "1px solid #006DBF",
                        borderRadius: "8px",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#f9f9f9",
                        width: "fit-content",
                        marginBlock: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                          fontSize: "16px",
                          color: "#006DBF",
                          paddingLeft: "10px",
                        }}
                      >
                        Adharcard
                      </Typography>
                      <Box sx={{ marginLeft: "15px" }}>
                        <IconButton>
                          <RemoveRedEyeIcon color="primary" />
                        </IconButton>
                        <IconButton>
                          <FileDownloadIcon color="primary" />
                        </IconButton>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={Meet}
                      style={{
                        width: "100px",
                        border: "1px solid #ddd",
                        padding: "15px",
                        marginBottom: "10px",
                      }}
                    />
                    <div>
                      <Button
                        href={eventd.link}
                        target="_blank"
                        variant="contained"
                      >
                        JOIN
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default RenderDayView;
