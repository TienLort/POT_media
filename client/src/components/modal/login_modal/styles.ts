import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    outline: "none",
    minWidth: "300px",
    maxWidth: "500px",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  modalTitle: {
    margin: "0",
  },
  modalBody: {
    marginBottom: "20px",
  },
  modalFooter: {
    display: "flex",
    justifyContent: "center",
  },
}));
