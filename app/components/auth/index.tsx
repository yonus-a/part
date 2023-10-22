"use client";

import { useState } from "react";
import CredentialsAuth from "../credentials-auth";
import ErrorMsg from "../error-msg";
import Lottie from "lottie-react";
import Image from "next/image";
import AdminAnimation from "@public/animation/admin.json";
import Link from "next/link";

export default function Auth({ callbackUrl }: any) {
  const [error, setError] = useState("");

  const setErrorMsg = (msg: string) => {
    setError(msg);
  };

  return (
    <>
      <div className="bg"></div>
      <div className="left-size">
        <div className="wrapper">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="شرکت پردازش مالی پارت"
                className="logo"
                width={200}
                height={90}
              />
            </Link>
          </div>
          <ErrorMsg>{error}</ErrorMsg>
          <CredentialsAuth
            callbackUrl={callbackUrl}
            setErrorMsg={setErrorMsg}
          />
        </div>
      </div>
      <Lottie
        className="animation"
        animationData={AdminAnimation}
        loop={true}
      />
    </>
  );
}
