import { AiFillStar } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./style.css";
import { useAuth } from "../../context/AppProvider";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { setIsLoggedIn } = useAuth();

  const onSubmit = async (values) => {
    console.log(values);

    const { data } = await axios.post("/user/login", values);

    // localStorage.setItem("token", token);
    // localStorage.setItem("user", JSON.stringify());
  };

  return (
    <div className="loginContainer">
      <div className="logo">
        <AiFillStar className="logoIcon" />
        <span>Travel Log Map</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          autoFocus
          placeholder="username"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          min="6"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {(errors.username || errors.password) && (
          <span className="failure">
            Username and Password required to Login
          </span>
        )}
        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
