// components/ChatRoom/ChatRoom.tsx
import React from "react";
import Header from "../../common/Header";
import OnlineList from "../OnlineList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import useMessagesMock from "../../hooks/useMessages";

const ChatRoom: React.FC = () => {
  const { messages, sendMessage, loadMore, currentUserId } = useMessagesMock();

  return (
    <div className="flex flex-col w-full h-auto bg-[#f1fff1]">
      <Header />
      <div className="flex items-start justify-center">
        <div className="border-r border-[#eeeeee] border-r-[2px] w-[20%] h-screen">
          <OnlineList />
        </div>

        <div className="w-[80%] h-screen flex flex-col">
          <MessageList
            messages={messages}
            currentUserId={currentUserId}
            onLoadMore={loadMore}
          />
          <MessageInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
