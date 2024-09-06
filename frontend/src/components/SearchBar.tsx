import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
// // import Grid from '@mui/material/Unstable_Grid2';
// import Grid from '@mui/material/Grid2';


interface SearchFormValues {
  title: string;
  location: string;
  jobType: string;
  experienceLevel: string;
}

const SearchBar: React.FC<{ onSubmit: (data: SearchFormValues) => void }> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<SearchFormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField {...register('title')} label="Job Title" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField {...register('location')} label="Location" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField {...register('jobType')} label="Job Type" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField {...register('experienceLevel')} label="Experience Level" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Search</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
