import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { signUp } from '../features/authSlice'; // Ensure you have this action in authSlice

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValues>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: SignUpFormValues) => {
    dispatch(signUp(data)); // Dispatch signUp action
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('username', { required: 'Username is required' })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;