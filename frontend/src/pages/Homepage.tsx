import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobSlice'; // Assuming you created this async thunk
import { RootState, AppDispatch } from '../store/store';
import { Container, Grid, CircularProgress } from '@mui/material';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import { Job } from '../types/Job';

const Homepage: React.FC = () => {
  // Use `AppDispatch` for dispatching async actions
  const dispatch: AppDispatch = useDispatch();
  const { jobs, loading } = useSelector((state: RootState) => state.jobs);
  const [filters, setFilters] = useState({ title: '', location: '', jobType: '', experienceLevel: '' });

  const handleSearch = (data: typeof filters) => {
    setFilters(data);
  };

  useEffect(() => {
    dispatch(fetchJobs(filters)); // Now properly typed
  }, [filters, dispatch]);

  return (
    <Container>
      <SearchBar onSubmit={handleSearch} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} marginTop={2}>
          {jobs.map((job: Job) => (
            <Grid item xs={12} key={job.id}>
              <JobCard
                title={job.title}
                location={job.location}
                jobType={job.jobType}
                experienceLevel={job.experienceLevel}
                description={job.description}
                onExpand={() => console.log('Navigate to job detail page')}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Homepage;