import React from "react";
import Container from "../components/layout/Container";
import Link from "next/link";

export default function FourZeroFour() {
  return (
    <Container title="404 - Cesar Diaz">
      <div className="flex flex-col h-screen justify-center items-start gap-y-4">
        <h1 className="text-really-big">Whoops!!</h1>
        <p>
          Something is missing. You should double check that the url is not misspelled.
        </p>
        <Link href="/">
          <a className="text-md">Return Home</a>
        </Link>
      </div>
    </Container>
  );
}
