"use client";

import { signIn, useSession } from "next-auth/react";
import Container from "../components/container";
import App from "../components/app";

export default function Home() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  return (
    <Container>
      {data?.user ? (
        <App />
      ) : (
        <button onClick={handleLogInClick}>faça login</button>
      )}
    </Container>
  );
}
