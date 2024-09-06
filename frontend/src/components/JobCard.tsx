import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface JobCardProps {
  title: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  description: string;
  onExpand: () => void; // Ensure this is included
}

const JobCard: React.FC<JobCardProps> = ({ title, location, jobType, experienceLevel, description, onExpand }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">
          {jobType} | {experienceLevel} | {location}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Button onClick={onExpand}>Expand</Button> {/* Example usage */}
      </CardContent>
    </Card>
  );
};

export default JobCard;