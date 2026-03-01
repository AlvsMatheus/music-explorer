import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!phone) {
      setError("Phone number is required");
      return;
    }
    if (!phone.startsWith("+254")) {
      setError("Phone must start with +254");
      return;
    }
    if (phone !== "+254712345678") {
      setError("Invalid phone number");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    navigate("/explorer");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center gap-5 h-full w-full px-4 py-8"
    >
      <section className="relative flex flex-col gap-2 justify-center items-center w-full">
        <h1 className="text-2xl font-bold text-white uppercase">Login</h1>
        <div className="h-px w-full bg-white/40" />
      </section>
      <section className="flex flex-col gap-10 justify-center items-center h-full w-full px-4 rounded-3xl">
        <input
          onChange={(e) => {
            setPhone(e.target.value);
            setError("");
          }}
          value={phone}
          placeholder="+254712345678"
          className="h-12 w-full px-2 rounded-xl bg-white/20 text-white outline-none focus:border-white/40 transition"
          type="tel"
        />
        {error && <span className="text-red-400 text-sm">{error}</span>}
        <button
          type="submit"
          className="h-12 w-full rounded-xl bg-white text-black font-semibold hover:opacity-90 active:scale-[0.98] transition"
        >
          Login
        </button>
      </section>
    </form>
  );
};

export default Form;
