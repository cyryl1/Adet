import React from 'react';
import { Alert as MuiAlert } from '@mui/material';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <MuiAlert severity="info">{message}</MuiAlert>
  );
};

export default Alert;