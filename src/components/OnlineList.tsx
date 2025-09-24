// components/ChatRoom/OnlineList.tsx
import React from "react";
import online1 from "../assets/images/contact1.jpg";
import online2 from "../assets/images/contact2.jpg";
import online3 from "../assets/images/contact3.jpg";

const OnlineList: React.FC = () => {
  const people = [
    { id: "u2", name: "Derek", img: online1 },
    { id: "u3", name: "John", img: online2 },
    { id: "u4", name: "Mark", img: online3 },
  ];
  return (
    <div className="p-3">
      <h1 className=" text-xl font-bold mt-4 ml-1 ">
        Online ({people.length}){" "}
      </h1>
      <ul className="mt-4 space-y-3">
        {people.map((p) => (
          <li key={p.id}>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
              <img
                src={p.img}
                alt={p.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-medium">{p.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineList;
