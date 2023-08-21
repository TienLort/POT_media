import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './styles';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setShowModal(true)}>
        Launch Modal Login Form
      </Button>
      <Modal open={showModal} onClose={handleClose}>
        <div className={classes.modalContainer}>
          <div className={classes.modalHeader}>
            <h4 className={classes.modalTitle}>Sign in</h4>
            <Button color="secondary" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div className={classes.modalBody}>
            <TextField
              fullWidth
              label="Your email"
              variant="outlined"
              margin="normal"
              InputProps={{ startAdornment: <i className="fas fa-envelope prefix grey-text"></i> }}
            />
            <TextField
              fullWidth
              label="Your password"
              type="password"
              variant="outlined"
              margin="normal"
              InputProps={{ startAdornment: <i className="fas fa-lock prefix grey-text"></i> }}
            />
          </div>
          <div className={classes.modalFooter}>
            <Button onClick={handleLogin} variant="contained" >
              Login
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;