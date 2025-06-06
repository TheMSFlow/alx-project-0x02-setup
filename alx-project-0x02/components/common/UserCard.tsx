import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-md w-full">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-600 text-sm">
        🏠 {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
