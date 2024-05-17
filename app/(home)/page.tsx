"use client";

import { signIn, useSession } from "next-auth/react";
import Container from "../components/container";
import LoginPage from "./components/login-page";

export default function Home() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  return (
    <Container>
      {data?.user ? (
        <p>úsuario logado</p>
      ) : (
        <LoginPage handleLogInClick={handleLogInClick} />
      )}
    </Container>
  );
}
