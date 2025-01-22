import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Grid, Stack, Typography } from "@mui/material";
import useStyle from "./style";
const Header = ({ view, setView, setCurrentDate, currentDate }) => {
  const classes = useStyle();
  const handleNavigation = (direction) => {
    const newDate =
      view === "Day"
        ? currentDate.clone().add(direction, "days")
        : view === "Week"
        ? currentDate.clone().add(direction, "weeks")
        : view === "Month"
        ? currentDate.clone().add(direction, "months")
        : currentDate.clone().add(direction, "years");
    setCurrentDate(newDate);
  };
  return (
    <Grid className={classes.headerGrid}>
      <Stack direction="row" spacing={2}>
        <Typography
          onClick={() => handleNavigation(-1)}
          className={classes.navigations}
        >
          <ChevronLeftIcon style={{ color: "grey" }} />
        </Typography>
        <Typography
          onClick={() => handleNavigation(1)}
          className={classes.navigations}
        >
          <ChevronRightIcon style={{ color: "grey" }} />
        </Typography>
        <Typography
          onClick={() => handleNavigation(1)}
          className={classes.date}
        >
          {currentDate.format("DD")}
        </Typography>
      </Stack>
      <Typography>
        {view === "Day"
          ? currentDate.format("DD MMMM YYYY")
          : view === "Week"
          ? `${currentDate
              .clone()
              .startOf("week")
              .format("DD MMMM")} - ${currentDate
              .clone()
              .endOf("week")
              .format("DD MMMM, YYYY")}`
          : view === "Month"
          ? currentDate.format("MMMM YYYY")
          : view === "Year"
          ? currentDate.format("YYYY")
          : ""}
      </Typography>
      <Stack direction="row" spacing={2}>
        {["Day", "Week", "Month", "Year"].map((v) => (
          <Button
            key={v}
            onClick={() => setView(v)}
            sx={{
              borderBottom: view === v ? "2px solid blue" : "none",
              borderRadius: 0,
              color: "#000",
            }}
          >
            {v}
          </Button>
        ))}
      </Stack>
    </Grid>
  );
};

export default Header;
