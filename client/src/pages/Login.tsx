import { fetchAuth } from "../redux/user/asyncAction";
import { AppDispatch } from "../redux";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const changeEmail = () => {
    const el = emailInputRef.current as HTMLInputElement;
    setEmail(el.value);
  };
  const changePassword = () => {
    const el = passwordInputRef.current as HTMLInputElement;
    setPassword(el.value);
  };

  return (
    <div>
      <input
        ref={emailInputRef}
        value={email}
        onChange={changeEmail}
      />
      <input
        ref={passwordInputRef}
        value={password}
        onChange={changePassword}
        type="password"
      />
      <button
        onClick={() => dispatch(fetchAuth({ email, password }))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
