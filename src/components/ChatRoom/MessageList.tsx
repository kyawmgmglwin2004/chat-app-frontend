// components/ChatRoom/MessageList.tsx
import React, { useEffect, useRef, useCallback } from "react";
import MessageItem from "./MessageItem";
import type { Message } from "../../hooks/useMessages";

type Props = {
  messages: Message[];
  currentUserId: string;
  onLoadMore?: () => void;
};

const MessageList: React.FC<Props> = ({
  messages,
  currentUserId,
  onLoadMore,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isAtBottomRef = useRef(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (isAtBottomRef.current) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages.length]);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (el.scrollTop < 120) onLoadMore?.();
    isAtBottomRef.current =
      el.scrollHeight - el.scrollTop - el.clientHeight < 120;
  }, [onLoadMore]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto p-4"
      style={{ height: "calc(100vh - 120px)" }}
    >
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Please Select Something To Chat
        </p>
      ) : (
        messages.map((m) => (
          <MessageItem
            key={m.id}
            message={m}
            isMine={m.senderId === currentUserId}
          />
        ))
      )}
    </div>
  );
};

export default MessageList;
