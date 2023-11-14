import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { setUserId } from './Redux/result_reducer'
import FormDialog from './components/Rule'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { setQuizName, settopicName } from './Redux/Quizname'
import FirstLook from './components/firstLook'

export default function() 
{
    const inputRef = useRef(null)
    const[quizName,setquizName] = useState(undefined);
    const [name, setName] = useState(''); 
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const value = useParams();
     console.log(value)
    
     
    const onSubmit=()=>{
         if(name){
            dispatch(setUserId(name))
            dispatch(setQuizName(value.quizname))
            setquizName(value.quizname);
            dispatch(settopicName(value.head))
         }
         
    }
    

    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className=''>
        <FirstLook handleClickOpen ={handleClickOpen} head={value.head} />
 
       <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Enter Details</DialogTitle>
         <DialogContent>
           <DialogContentText>
             
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

       <TextField
             
             margin="dense"
             id="name"
             label="Enter Your Name"
             type="text"
             fullWidth
             variant="standard"
             onChange={(e)=>setName(e.target.value)}
           />
         
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
           <Link to='/quiz'><Button onClick={onSubmit}>Start</Button></Link>  
         </DialogActions>
       </Dialog>
    
    </div>
  )
}

 
 
