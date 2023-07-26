import React from "react";
import useDataFetch from "./useDataFetch";

const UserList = () => {
  const { data, isLoading, error } = useDataFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isLoading) {
    return <div>Data is Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
