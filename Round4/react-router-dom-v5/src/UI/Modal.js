import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: '#1194ff',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Title = styled.p`
 font-size:24px;
 padding: .5rem 0;
`
const Description = styled.p`
margin-top: 1rem;
`
export default function NestedModal() {
  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 ,fontSize:'18px'}}>
          <Title id="parent-modal-title">Please write a welcome message!😍</Title>
          <hr/>
          <Description id="parent-modal-description">
          There are no welcome messages.<br/> Good luck being the first message creator!😃
          </Description>
          
        </Box>
      </Modal>
    </div>
  );
}