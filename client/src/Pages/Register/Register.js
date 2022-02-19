import React, { useEffect, useState } from "react";
import { RegisterContainer } from "./register.style";
import * as Global from "../../GlobalElements/globalElments.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../Redux/features/auth/authSlice";
import Loader from "../../Components/Loader/Loader";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, message, isSuccess, navigate, dispatch]);

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let re = /\S+@\S+\.\S+/;
    console.log(re.test(userData.email));
    if (userData.email === "" || userData.password === "") {
      setRegisterError("Please field the inputs");
      return;
    } else if (re.test(userData.email) === false) {
      setRegisterError("Invalid email");
      return;
    } else if (userData.username.length < 4) {
      setRegisterError("Username Too Short");
      return;
    } else {
      setRegisterError("");

      dispatch(register(userData));
    }
    console.log(userData);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <RegisterContainer>
      <Global.Header>Register</Global.Header>
      <Global.Form onSubmit={handleOnSubmit}>
        <Global.InputContainer>
          <Global.Label>Username</Global.Label>
          <Global.Input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleOnChange}
          />
        </Global.InputContainer>
        <Global.InputContainer>
          <Global.Label>Email</Global.Label>
          <Global.Input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
          />
        </Global.InputContainer>
        <Global.InputContainer>
          <Global.Label>Password</Global.Label>
          <Global.Input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleOnChange}
          />
        </Global.InputContainer>
        {registerError && (
          <Global.ErrorFiles>{registerError}</Global.ErrorFiles>
        )}
        <Global.Button>Login</Global.Button>
      </Global.Form>
    </RegisterContainer>
  );
}

export default Register;
