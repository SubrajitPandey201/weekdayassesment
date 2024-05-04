// src/components/JobCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography>{job.location}</Typography>
        <Typography>{job.description}</Typography>
        <Typography>Experience: {job.experience}</Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
