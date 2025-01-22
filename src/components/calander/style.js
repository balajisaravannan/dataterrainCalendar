import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  headerGrid: {
    "&.MuiGrid-root": {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      alignItems: "center",
      background: "#f7f7f7",
      position: "fixed",
      left: 0,
      right: 0,
      zIndex: 99,
      top: 0,
    },
  },
  btnAll: {
    "&.MuiButton-root": {},
  },
  meetFont: {
    "&.MuiTypography-root": {
      fontSize: "14px",
      lineHeight: "28px",
    },
  },
  navigations: {
    "&.MuiTypography-root": {
      border: "2px solid blue",
      backgroundColor: "rgb(255, 255, 255)",
      display: "flex",
      alignItems: "center",
      borderRadius: "5px",
      padding: "5px",
      cursor: "pointer",
    },
  },
  date: {
    "&.MuiTypography-root": {
        backgroundColor: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        padding: "5px",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        width: "28px",
        justifyContent: "center",
    },
  },
}));

export default useStyle;
