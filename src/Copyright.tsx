import * as React from 'react';
import { Typography, Link, Card, CardContent, CardActions, Button } from '@mui/material';
import logo from './logo.svg';


export default function Copyright() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography align='center'>
          <img src={logo} />
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            T&T Website
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}