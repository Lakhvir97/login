import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Div, Form } from "./style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    let items = { email, password };
    let result = await fetch(
      "https://sql-dev-india.thewitslab.com:3003/auth/login",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      }
    );

    let res = await result.json();
    // localStorage.setItem("user", JSON.stringify(result));
    // console.log(res);
    if (result.status === 200) {
      localStorage.setItem("user", JSON.stringify(res));
      localStorage.setItem("token", JSON.stringify(res.token));
      console.log(result);
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <Div>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>

          {errors.email && <p>Email is Required</p>}
          <br></br>
          <input
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 10,
            })}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>

          {errors.password && <p>Password is Required</p>}
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </Form>
    </Div>
  );
};

export default Login;
