import React, { Component, useState } from "react";
import { Button, Container, Input } from "reactstrap";
import { ApiGet } from "../API/ApiData";

// Component for predicting the age and gender
const Base = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleValidation = () => {
    if (name === "") {
      setMessage("Enter Name");
      setAge("");
      setGender("");
      return false;
    }
    return true;
  };

  const handleClick = async () => {
    if (handleValidation()) {
      let res = await ApiGet("https://api.agify.io?name=" + name);
      if (res?.data?.age) {
        setAge(res?.data?.age);
        setMessage("Success");
      } else {
        setMessage("Oops! Something went wrong. Name not found in our server");
        setAge("");
      }
      res = await ApiGet("https://api.genderize.io?name=" + name);
      if (res?.data?.gender) {
        setGender(res?.data?.gender);
        setMessage("Success");
      } else {
        setMessage("Oops! Something went wrong. Name not found in our server");
        setGender("");
      }
    }
  };

  return (
    <Container>
      <h1>Get Gender and Age from Name</h1>
      <div className="py-3">
        <Input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-3">
        {age && <div> Age : {age}</div>}
        {gender && <div>Gender : {gender}</div>}
        {message && <div>Message : {message}</div>}
      </div>
      <div>
        <Button color="primary" onClick={() => handleClick()}>
          Get age and gender
        </Button>
      </div>
    </Container>
  );
};

export default Base;
