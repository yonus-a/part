"use client";

import CredentialsAuth from "@app/components/credentials-auth";
import ErrorMsg from "@app/components/error-msg";
import { useState } from "react";
import Image from "next/image";
import "./styles.scss";

export default function SignIn({ searchParams }: any) {
  const { callbackUrl } = searchParams;
  const [error, setError] = useState("");

  const setErrorMsg = (msg: string) => {
    setError(msg);
  };

  return (
    <main className="signin">
      <div className="bg"></div>
      <div className="left-size">
        <div className="wrapper">
          <div className="logo">
            <Image
              src="/images/logo.png"
              alt="شرکت پردازش مالی پارت"
              className="logo"
              width={200}
              height={90}
            />
          </div>
          <ErrorMsg>{error}</ErrorMsg>
          <CredentialsAuth
            callbackUrl={callbackUrl}
            setErrorMsg={setErrorMsg}
          />
        </div>
      </div>
    </main>
  );
}
