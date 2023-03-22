import Image from "next/image";
import Head from "next/head";
import LoginBanner from "../assets/netflix-login-banner.jpg";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}


function Login() {
    const [login, setLogin] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>(); // Register Inputs type with useForm
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(data);
    };

  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netlflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={LoginBanner}
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        alt="login banner"
        style={{ objectFit: "cover" }}
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 spacey8 rounded bg-black/75 py-10
      px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4 pt-8">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
          </label>
        </div>

        <div className="pt-8">
          <button className="w-full rounded bg-[#e50914] py-3 font-semibold">
            Sign In
          </button>
        </div>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button type="submit" className="text-white hover:underline pt-8">
            Sign Up Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
