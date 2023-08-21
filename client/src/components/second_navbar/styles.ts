import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles<Theme>(() => ({
  SecondNavbar: {
    backgroundColor: "#1c1c1c",
    width: "100%",
    display: "flex",
    height: "47px",
    position: "fixed",
    padding: "0 clamp(10px, 3vw, 50px)",
  },
  NavbarContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  LeftNav: {
    alignItems: "center",
    display: "flex",
    overflowX: "clip",
    overflowY: "visible",
  },

  LinkButton: {
    display: "flex",
    height: "47px",
  },
  NavLink: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1.25rem",
    color: "#eee",
    fontWeight: "400",
    letterSpacing: ".4px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    cursor: "pointer",
    position: "relative",

    "&:hover $DropDownContent": {
      display: "flex",
      flexDirection: "column",
    },
  },
  Arrow: {
    width: "0",
    height: "0",
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: "6px solid #eee",
    marginLeft: "3px",
    color: "#eee",
    fontWeight: "400",
    letterSpacing: ".4px",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  DropDownContent: {
    display: "none",
    position: "absolute",
    bottom: "-50px",
    left: "50%",
    background: "#fff",
    color: "#000",
  },
}));
