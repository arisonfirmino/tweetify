"use client";

import { useSession } from "next-auth/react";
import Container from "../components/container";
import App from "../components/app";
import LoginPage from "../components/login-page";

export default function Home() {
  const { data } = useSession();

  return <Container>{data?.user ? <App /> : <LoginPage />}</Container>;
}
