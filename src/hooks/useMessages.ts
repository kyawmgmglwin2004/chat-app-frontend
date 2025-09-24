// hooks/useMessages.mock.ts
import { useState, useEffect, useCallback } from "react";

export type Message = {
  id: string;
  text: string;
  senderId: string;
  senderName?: string;
  createdAt: string;
};

const initialMock: Message[] = [
  {
    id: "1",
    text: "Hey! Welcome to the chat demo.",
    senderId: "u2",
    senderName: "Derek",
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: "2",
    text: "Hi Derek! This looks great.",
    senderId: "me",
    senderName: "You",
    createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
  {
    id: "3",
    text: "We can add more messages to test scrolling.",
    senderId: "u2",
    senderName: "Derek",
    createdAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
  },
];

export default function useMessagesMock(enableAuto = false) {
  const [messages, setMessages] = useState<Message[]>(initialMock);
  const [currentUserId] = useState(() => "me");

  // small helper to generate fake incoming messages (UI demo)
  useEffect(() => {
    if (!enableAuto) return;
    const timer = setInterval(() => {
      setMessages((prev) => {
        if (prev.length > 20) return prev;
        const count = prev.length + 1;
        return [
          ...prev,
          {
            id: `${count + 100}`,
            text: `Auto-generated message ${count}`,
            senderId: count % 2 === 0 ? "me" : "u2",
            senderName: count % 2 === 0 ? "You" : "Derek",
            createdAt: new Date().toISOString(),
          },
        ];
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [enableAuto]);

  const loadMore = useCallback(() => {
    // prepend some older messages to simulate pagination
    setMessages((prev) => {
      const older = Array.from({ length: 5 }).map((_, idx) => {
        const id = `older-${Date.now()}-${idx}`;
        return {
          id,
          text: `Older message ${idx + 1}`,
          senderId: idx % 2 === 0 ? "u2" : "me",
          senderName: idx % 2 === 0 ? "Derek" : "You",
          createdAt: new Date(
            Date.now() - 1000 * 60 * (60 + (idx + prev.length))
          ).toISOString(),
        };
      });
      return [...older, ...prev];
    });
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      const msg: Message = {
        id: `local-${Date.now()}`,
        text,
        senderId: currentUserId,
        senderName: "You",
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, msg]);
    },
    [currentUserId]
  );

  return { messages, sendMessage, loadMore, currentUserId };
}
