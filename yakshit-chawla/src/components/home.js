import React, {useState} from 'react'
import SearchStates from './searchStates'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Popup from './popup';


const Input = styled('input')({
   display: 'none'
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Home() 
{
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (       
    <Stack direction="row" alignItems="center">
     <SearchStates />
      <label>
      <Input accept="*" multiple type="file" onChange={handleOpen} />
      <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      <label>
       <Modal
        open={open}>
        <Box sx={style}>
        <Popup></Popup>
        <Button alignItems="right" onClick={handleClose}>Close</Button>
        </Box>
      </Modal> 
      </label>
    </Stack>
  );

}

