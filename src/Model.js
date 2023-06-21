import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const Model = ({ job, company, handleClose }) => {
  return (
    <Dialog open={true} onClose={handleClose} style={{backgroundColor:"lightskyblue"}}>
      <DialogTitle style={{textAlign:"center"}}>Job Application</DialogTitle>
      <DialogContent>
        <p>{job} applied with {company}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Model;
