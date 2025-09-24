// components/ChatRoom/MessageInput.tsx
import React, { useState } from "react";

const MessageInput: React.FC<{ onSend: (text: string) => void }> = ({
  onSend,
}) => {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };
  return (
    <div className="p-5">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-400 outline-none"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
