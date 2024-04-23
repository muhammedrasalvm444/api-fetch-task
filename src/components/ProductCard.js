import React from "react";
import "./style.css";

const ProductCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <hr />
    </div>
  );
};

export default ProductCard;
