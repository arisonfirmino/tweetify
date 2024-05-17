"use client";

import { signIn, useSession } from "next-auth/react";
import Container from "../components/container";
import LoginPage from "./components/login-page";
import App from "./components/app";

export default function Home() {
  const { data } = useSession();
  const handleLogInClick = () => signIn("google");

  console.log(data);

  return (
    <Container>
      {data?.user ? (
        <App image={data?.user.image ?? ""} name={data?.user.name ?? ""} />
      ) : (
        <LoginPage handleLogInClick={handleLogInClick} />
      )}
    </Container>
  );
}
