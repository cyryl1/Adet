import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container } from '@mui/material';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data); // Here you would call your login API
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('email')} label="Email" variant="outlined" fullWidth />
        <TextField {...register('password')} label="Password" type="password" variant="outlined" fullWidth />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
};

export default LoginPage;