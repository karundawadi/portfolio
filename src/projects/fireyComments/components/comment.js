import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import Avatar from 'react-avatar';

const Comment = ({ comment, name, date }) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <Paper elevation={2} sx={{ padding: 2, mb: 2, display: 'flex', alignItems: 'flex-start' }}>
      <Avatar
        name={name}
        round
        size="40"
        color={randomColor}
        style={{ marginRight: '16px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1">{comment}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            {name}
          </Typography>
          <Typography variant="caption">{date}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Comment;