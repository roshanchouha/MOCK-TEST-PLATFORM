import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        
       <div className='btn btn-primary' onClick={handleClickOpen}>Start</div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Instruction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
                <li>you will be asked 10 question one after other</li>
                <li>10 point is awarded for each correct answer</li>
                <li>you can review and change answer before the quiz finish</li>
                <li>the result will be declared at the end of the quiz</li>
            </ul>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Start</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
