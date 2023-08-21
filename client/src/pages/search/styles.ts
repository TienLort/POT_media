import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  body: {
    width: "100%",
    padding: "20px 0 20px 10px",
  },
  accord: {
    margin: "8px 0 !important",
  },
  boxBadge: {
    display: "flex",
    width: "33%",
    alignItems: "center",
    overflowWrap: "break-word",
  },
  accordDetail: {
    display: "flex",
    paddingRight: "40px !important",
  },
  boxDetail: {
    width: "33%",
  },
  bodyStyle: {
    color: "text.secondary",
    width: "100%",
    overflowWrap: "break-word",
    flexShrink: 0,
    marginLeft: "10px",
  },
}));
