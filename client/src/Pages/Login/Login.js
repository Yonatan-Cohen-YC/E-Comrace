import React, { useEffect, useState } from "react";
import { LoginContainer } from "./login.style";
import { ErrorFiles } from "../../GlobalElements/globalElments.style";
import * as Global from "../../GlobalElements/globalElments.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../Redux/features/auth/authSlice";
import Loader from "../../Components/Loader/Loader";
function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let re = /\S+@\S+\.\S+/;
    console.log(re.test(userData.email));
    if (userData.email === "" || userData.password === "") {
      setLoginError("Please field the inputs");
      return;
    } else if (re.test(userData.email) === false) {
      setLoginError("Invalid email");
      return;
    } else {
      setLoginError("");
      dispatch(login(userData));
    }
    console.log(userData);
  };

  const handleOnChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <LoginContainer>
      <Global.Header>Login</Global.Header>
      <Global.Form onSubmit={handleOnSubmit}>
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
        {loginError && <ErrorFiles>{loginError}</ErrorFiles>}
        <Global.Button>Login</Global.Button>
      </Global.Form>
    </LoginContainer>
  );
}

export default Login;
