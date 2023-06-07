import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncGet, selectUsers } from "./fetchSlice";
import "./Fetch.scss";

const Fetch = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    dispatch(fetchAsyncGet());
  }, [dispatch]);

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="user-box">
          <div>Name:{user.name}</div>
          <div>Email:{user.email}</div>
        </div>
      ))}
    </>
  );
};

export default Fetch;
