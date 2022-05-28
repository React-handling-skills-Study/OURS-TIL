import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';
import { Link, Route } from 'react-router-dom';
import NewMemberMessage from '../pages/NewMemberMessage';

const bull = (
  <Box  component="span"sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const StyledLink = styled(Link)`
    color: #1171ff!important;
    font-size:14px;
    &:hover{
      color: #1199ff!important;
      text-decoration:underline;
    }
`;

export default function BasicCard({
        id,
        address,
        branch,
        description,
        email,
        entertingDate,
        name,
        phone,
        showMessage,
        
      }) {
   
  return (
    <>
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color:'orange' }} color="text.secondary" gutterBottom>
          {bull}ORANGE HAWKS{bull}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          BRANCH: {branch}
        </Typography>
        <Typography variant="body2">
          {entertingDate}
          <br />
          PHONE: {phone.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "")}
        </Typography>
      </CardContent>
      <CardActions>
        
        <StyledLink onClick={showMessage} to={`/newmember/orangehawks/${id}`}>MESSAGE</StyledLink>
      </CardActions>
    </Card>
    
    </>
  );
}