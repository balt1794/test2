import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import {Typography} from "@material-ui/core"
import { Box } from "@material-ui/core";

export default props => 
{

    return(
<Box >
<Alert variant="secondary">
            
<Col className='text-center'>
<Row>
  <b className='text-center'>HireJrDevs is currently in beta.</b>
</Row>
<Row >
  <Typography className='text-center'>If you are a company or someone who wants to post a job</Typography>
</Row>
<Row>
  <Typography>send me an email at balt1794@gmail.com</Typography>
</Row>
<Row>
<Typography>Posting jobs is free for the beta version.</Typography>
</Row>
</Col>
</Alert>


</Box>


)
}