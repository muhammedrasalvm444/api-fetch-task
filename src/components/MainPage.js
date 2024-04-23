import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import ProductCard from "./ProductCard";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading....
        </div>
      ) : (
        <>
          <h1>Users</h1>
          <div className="user-list">
            {users.map((user, index) => (
              <ProductCard key={index} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
