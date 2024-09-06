import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedJobs, fetchUserAlerts } from '../features/userSlice';
import { RootState, AppDispatch } from '../store/store';
import { Container, Grid, Typography } from '@mui/material';
import JobCard from '../components/JobCard';
import Alert from '../components/Alert';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { savedJobs, userAlerts, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchSavedJobs());
    dispatch(fetchUserAlerts());
  }, [dispatch]);

  const handleExpand = (jobId: string) => {
    // Define what should happen when expanding a job card
    console.log(`Expand job with ID: ${jobId}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Dashboard
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Typography variant="h6">Saved Jobs</Typography>
          <Grid container spacing={2}>
            {savedJobs.map((job) => (
              <Grid item xs={12} md={6} key={job.id}>
                <JobCard
                  title={job.title}
                  location={job.location}
                  jobType={job.jobType}
                  experienceLevel={job.experienceLevel}
                  description={job.description}
                  onExpand={() => handleExpand(job.id)} // Provide onExpand prop
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" marginTop={4}>
            Alerts
          </Typography>
          {userAlerts.map((alert) => (
            <Alert key={alert.id} message={alert.message} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Dashboard;