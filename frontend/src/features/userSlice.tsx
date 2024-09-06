import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Job {
  id: string;
  title: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  description: string;
}

interface Alert {
  id: string;
  message: string;
}

interface UserState {
  savedJobs: Job[];
  userAlerts: Alert[];
  loading: boolean;
}

const initialState: UserState = {
  savedJobs: [],
  userAlerts: [],
  loading: false,
};

// Define async thunks for fetching data
export const fetchSavedJobs = createAsyncThunk('user/fetchSavedJobs', async () => {
  const response = await fetch('/api/user/saved');
  return response.json();
});

export const fetchUserAlerts = createAsyncThunk('user/fetchUserAlerts', async () => {
  const response = await fetch('/api/user/alerts');
  return response.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSavedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.savedJobs = action.payload;
      })
      .addCase(fetchSavedJobs.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchUserAlerts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserAlerts.fulfilled, (state, action) => {
        state.loading = false;
        state.userAlerts = action.payload;
      })
      .addCase(fetchUserAlerts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;