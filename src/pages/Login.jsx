import React from "react";
import Form from "../components/login/Form";

const Login = () => {
  return (
    <article className="relative flex justify-center items-center min-h-screen w-full bg-linear-to-b bg-[url('/public/music_background.jpg')] bg-center">
      <div className="absolute h-full w-full bg-black/70 z-0" />
      <section className="relative z-10 h-100 w-100 bg-white/10 backdrop-blur-xs border border-white/20 rounded-3xl shadow-2xl">
        <Form />
      </section>
    </article>
  );
};

export default Login;
