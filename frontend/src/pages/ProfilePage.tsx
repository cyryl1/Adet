import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="body1">Manage job alerts and preferences</Typography>
      <List>
        <ListItem>Job alert 1</ListItem>
        <ListItem>Job alert 2</ListItem>
      </List>
    </Container>
  );
};

export default ProfilePage;