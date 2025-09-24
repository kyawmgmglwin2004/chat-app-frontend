// components/ChatRoom/MessageItem.tsx
import React from "react";
import type { Message } from "../../hooks/useMessages";

const MessageItem = React.memo(
  ({ message, isMine }: { message: Message; isMine: boolean }) => {
    return (
      <div className={`mb-3 flex ${isMine ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-[60%] p-3 rounded-lg ${
            isMine ? "bg-blue-500 text-white" : "bg-white border"
          }`}
        >
          <div className="text-sm break-words">{message.text}</div>
          <div className="text-xs opacity-60 mt-1 text-right">
            {new Date(message.createdAt).toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  }
);

export default MessageItem;
