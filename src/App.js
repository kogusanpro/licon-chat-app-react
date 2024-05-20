import { styled } from "styled-components";
import React, { useState } from "react";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { SignUp } from "./components/pages/SignUp";
import { Login } from "./components/pages/Login";
import { Header } from "./components/atoms/lauout/DefaultHeader";
import "./styles.css";

export default function App() {
  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  const LeftPane = styled.div`
    flex: 0 0 250px;
    background-color: #ffe7bf;
  `;

  const RightPane = styled.div`
    flex: 1;
    background-color: #fffaf2;
    padding: 0 20px;
  `;

  const ChannelList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const ChannelItem = styled.li`
    padding: 0 10px;
    margin-bottom: 1px;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0; /* ホバー時の背景色 */
    }
  `;

  const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `;

  const MessageList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
  `;

  const MessageItem = styled.div`
    padding: 10px;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
  `;

  const MessageForm = styled.form`
    display: flex;
    margin: 0;
    padding: 20px;
    border-radius: 5px;
    background-color: #fffaf2;
  `;

  const MessageInput = styled.input`
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  `;

  const SendButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;

  const channels = [
    { id: 1, name: "チャンネル1" },
    { id: 2, name: "チャンネル2" },
    { id: 3, name: "チャンネル3" },
    { id: 4, name: "チャンネル4" },
    { id: 5, name: "チャンネル5" },
  ];

  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
    setMessages([]); // チャンネルを切り替えるとメッセージをリセット
  };

  const handleInputChange = (e) => {
    // 1文字しか打てないのはレンダリングが原因っぽい
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <LeftPane>
          <h3>チャンネル</h3>
          <ChannelList>
            {channels.map((channel) => (
              <ChannelItem
                key={channel.id}
                onClick={() => handleChannelClick(channel)}
              >
                {channel.name}
              </ChannelItem>
            ))}
          </ChannelList>
        </LeftPane>
        <RightPane>
          {selectedChannel ? (
            <MessageContainer>
              <h3>{selectedChannel.name}</h3>
              <MessageList>
                {messages.map((message, index) => (
                  <MessageItem key={index}>{message}</MessageItem>
                ))}
              </MessageList>
              <MessageForm onSubmit={handleSubmit}>
                <MessageInput
                  type="text"
                  value={newMessage}
                  onChange={handleInputChange}
                  placeholder="Type a message"
                />
                <SendButton type="submit">Send</SendButton>
              </MessageForm>
            </MessageContainer>
          ) : (
            <h2>Please select a channel</h2>
          )}
        </RightPane>
      </Container>
      {/* <SignUp /> */}
      {/* <Login /> */}
    </BrowserRouter>
  );
}
