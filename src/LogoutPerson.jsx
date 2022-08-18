import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div } from "./style2";

function LogoutPerson() {
  const navigate = useNavigate();

  const [data, setData] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setData(data);
  }, []);
  const [profile, setProfile] = useState(false);
  const Show = () => {
    setProfile(true);
  };

  const clicked = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Div>
      <div className="main">
        <button onClick={Show}>Profile</button>
        <button onClick={clicked}>Logout</button>
      </div>
      {profile ? (
        <data className="data">
          <p>FirstName:{data.firstName}</p>
          <p>LastName:{data.lastName}</p>
          <p>Phone no.{data.phone}</p>
          <p> Email:{data.email}</p>
          <p> City:{data.city}</p>
          <p>State:{data.state}</p>
        </data>
      ) : null}
    </Div>
  );
}

export default LogoutPerson;
