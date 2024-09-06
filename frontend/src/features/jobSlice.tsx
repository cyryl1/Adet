import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk to accept filters
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs', 
  async (filters: { title: string; location: string; jobType: string; experienceLevel: string }) => {
    // Construct your API URL using the filters
    const response = await fetch(`/api/jobs?title=${filters.title}&location=${filters.location}&jobType=${filters.jobType}&experienceLevel=${filters.experienceLevel}`);
    const data = await response.json();
    return data; // This will be available in the fulfilled action
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload; // The job data from the API
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default jobsSlice.reducer;
