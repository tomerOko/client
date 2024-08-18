import React, { useState, useRef, useEffect } from "react";
import { create } from "zustand";
import styled from "@emotion/styled";
import { format } from "date-fns";

// Types
type MessageType = "text" | "meeting_suggestion";

interface Message {
  id: string;
  sender: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  meetingDetails?: {
    date: Date;
    time: string;
  };
}

interface Chat {
  id: string;
  participants: string[];
  messages: Message[];
}

interface ChatStore {
  chats: Chat[];
  activeChat: string | null;
  setActiveChat: (chatId: string) => void;
  sendMessage: (
    chatId: string,
    message: Omit<Message, "id" | "timestamp">
  ) => void;
  approveMeeting: (chatId: string, messageId: string) => void;
  rejectMeeting: (chatId: string, messageId: string) => void;
}

// Mock data
const mockChats: Chat[] = [
  {
    id: "1",
    participants: ["Alice", "Bob"],
    messages: [
      {
        id: "1",
        sender: "Alice",
        content: "Hi Bob, how are you?",
        type: "text",
        timestamp: new Date("2023-08-18T10:00:00"),
      },
      {
        id: "2",
        sender: "Bob",
        content: "Hey Alice, I'm good! How about you?",
        type: "text",
        timestamp: new Date("2023-08-18T10:05:00"),
      },
    ],
  },
  {
    id: "2",
    participants: ["Alice", "Charlie"],
    messages: [
      {
        id: "1",
        sender: "Charlie",
        content: "Alice, can we schedule a meeting?",
        type: "text",
        timestamp: new Date("2023-08-18T11:00:00"),
      },
    ],
  },
];

// Zustand store
const useStore = create<ChatStore>((set) => ({
  chats: mockChats,
  activeChat: null,
  setActiveChat: (chatId) => set({ activeChat: chatId }),
  sendMessage: (chatId, message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  ...message,
                  id: Date.now().toString(),
                  timestamp: new Date(),
                },
              ],
            }
          : chat
      ),
    })),
  approveMeeting: (chatId, messageId) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: chat.messages.map((msg) =>
                msg.id === messageId
                  ? { ...msg, content: msg.content + " (Approved)" }
                  : msg
              ),
            }
          : chat
      ),
    })),
  rejectMeeting: (chatId, messageId) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: chat.messages.map((msg) =>
                msg.id === messageId
                  ? { ...msg, content: msg.content + " (Rejected)" }
                  : msg
              ),
            }
          : chat
      ),
    })),
}));

// Styled components
const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #f0f0f0;
  padding: 20px;
  overflow-y: auto;
`;

const ChatList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ChatItem = styled.li<{ active: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#e0e0e0" : "white")};
  border-radius: 5px;
  cursor: pointer;
`;

const ChatWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const MessageBubble = styled.div<{ isSender: boolean }>`
  max-width: 70%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${(props) => (props.isSender ? "#dcf8c6" : "#fff")};
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};
`;

const MeetingSuggestion = styled(MessageBubble)`
  background-color: #fff0f5;
  border: 1px solid #ff69b4;
`;

const InputArea = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

// Components
export const ChatPage: React.FC = () => {
  const {
    chats,
    activeChat,
    setActiveChat,
    sendMessage,
    approveMeeting,
    rejectMeeting,
  } = useStore();
  const [inputValue, setInputValue] = useState("");
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [chats, activeChat]);

  const handleSendMessage = () => {
    if (inputValue.trim() && activeChat) {
      sendMessage(activeChat, {
        sender: "You",
        content: inputValue,
        type: "text",
      });
      setInputValue("");
    }
  };

  const handleSendMeetingSuggestion = () => {
    if (meetingDate && meetingTime && activeChat) {
      sendMessage(activeChat, {
        sender: "You",
        content: `Meeting suggestion: ${meetingDate} at ${meetingTime}`,
        type: "meeting_suggestion",
        meetingDetails: {
          date: new Date(meetingDate),
          time: meetingTime,
        },
      });
      setShowMeetingForm(false);
      setMeetingDate("");
      setMeetingTime("");
    }
  };

  return (
    <ChatContainer>
      <Sidebar>
        <ChatList>
          {chats.map((chat) => (
            <ChatItem
              key={chat.id}
              active={chat.id === activeChat}
              onClick={() => setActiveChat(chat.id)}
            >
              {chat.participants.join(", ")}
            </ChatItem>
          ))}
        </ChatList>
      </Sidebar>
      <ChatWindow>
        <MessageList ref={messageListRef}>
          {activeChat &&
            chats
              .find((chat) => chat.id === activeChat)
              ?.messages.map((message) =>
                message.type === "meeting_suggestion" ? (
                  <MeetingSuggestion
                    key={message.id}
                    isSender={message.sender === "You"}
                  >
                    <div>{message.content}</div>
                    <Button
                      onClick={() => approveMeeting(activeChat, message.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => rejectMeeting(activeChat, message.id)}
                    >
                      Reject
                    </Button>
                  </MeetingSuggestion>
                ) : (
                  <MessageBubble
                    key={message.id}
                    isSender={message.sender === "You"}
                  >
                    <div>{message.content}</div>
                    <div>{format(message.timestamp, "HH:mm")}</div>
                  </MessageBubble>
                )
              )}
        </MessageList>
        <InputArea>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
          />
          <Button onClick={handleSendMessage}>Send</Button>
          <Button onClick={() => setShowMeetingForm(!showMeetingForm)}>
            {showMeetingForm ? "Cancel" : "Schedule Meeting"}
          </Button>
        </InputArea>
        {showMeetingForm && (
          <div>
            <Input
              type="date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
            />
            <Input
              type="time"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
            />
            <Button onClick={handleSendMeetingSuggestion}>
              Send Meeting Suggestion
            </Button>
          </div>
        )}
      </ChatWindow>
    </ChatContainer>
  );
};
