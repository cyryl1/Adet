import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real scenario, you would fetch job details based on the `id`.
  // For simplicity, we are hardcoding some details here.

  return (
    <Container>
      <Typography variant="h4">Job Title {id}</Typography>
      <Typography variant="body1">Detailed job description goes here.</Typography>
      <Button variant="contained" color="primary">Save</Button>
      <Button variant="contained" color="secondary">Apply</Button>
    </Container>
  );
};

export default JobDetailPage;