import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface Message {
  sender: string;
  content: string;
  timestamp: string;
  type: string; // "text" or "meeting_invite"
  meetingDetails?: {
    date: string;
    time: string;
  };
}

const mockMessages: Message[] = [
    {
        sender: 'John Doe',
        content: 'Hello, how can I help you today?',
        timestamp: '2021-10-01T10:00:00.000Z',
        type: 'text',
    },
    {
        sender: 'Jane Doe',
        content: 'I need help with my project.',
        timestamp: '2021-10-01T10:05:00.000Z',
        type: 'text',
    },
    {
        sender: 'John Doe',
        content: 'Sure, I can help you with that.',
        timestamp: '2021-10-01T10:10:00.000Z',
        type: 'text',
    },
    {
        sender: 'John Doe',
        content: 'Meeting Invitation',
        timestamp: '2021-10-01T10:15:00.000Z',
        type: 'meeting_invite',
        meetingDetails: {
        date: '2021-10-05',
        time: '14:00',
        },
    },
    ];

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const socket = io('http://localhost:3000');

  useEffect(() => {
    // axios.get('http://localhost:3000/chat')
    //   .then(response => setMessages(response.data))
    //   .catch(error => console.error(error));
    setMessages(mockMessages);

    socket.on('newMessage', (message: Message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSendMessage = () => {
    const message: Message = {
      sender: 'currentUser',
      content: newMessage,
      timestamp: new Date().toISOString(),
      type: 'text',
    };

    socket.emit('sendMessage', message);
    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleSendMeetingInvite = () => {
    const message: Message = {
      sender: 'currentUser',
      content: 'Meeting Invitation',
      timestamp: new Date().toISOString(),
      type: 'meeting_invite',
      meetingDetails: {
        date: meetingDate,
        time: meetingTime,
      },
    };

    socket.emit('sendMessage', message);
    setMessages([...messages, message]);
    setOpen(false);
  };

  const handleApproveMeeting = (index: number) => {
    // Handle meeting approval logic
  };

  const handleRejectMeeting = (index: number) => {
    // Handle meeting rejection logic
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        MeetupChat
      </Typography>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={message.sender} />
            </ListItemAvatar>
            <ListItemText
              primary={message.content}
              secondary={message.timestamp}
            />
            {message.type === 'meeting_invite' && message.meetingDetails && (
              <Box>
                <Typography variant="body2">Date: {message.meetingDetails.date}</Typography>
                <Typography variant="body2">Time: {message.meetingDetails.time}</Typography>
                <Button onClick={() => handleApproveMeeting(index)}>Approve</Button>
                <Button onClick={() => handleRejectMeeting(index)}>Reject</Button>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => setOpen(true)}>
          <CalendarTodayIcon />
        </IconButton>
      </Box>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Send Meeting Invitation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the date and time for the meeting.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Time"
            type="time"
            fullWidth
            variant="standard"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSendMeetingInvite}>Send</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

