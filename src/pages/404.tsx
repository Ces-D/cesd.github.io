import React from "react";
import Container from "../components/Container";
import Link from "next/link";

export default function FourZeroFour() {
  return (
    <Container title="404 - Cesar Diaz">
      <div className="flex flex-col justify-center items-start gap-y-4">
        <h1>Whoops!!</h1>
        <p>
          Something is missing. You should double check that the url is not misspelled.
        </p>
        <Link href="/">Return Home</Link>
      </div>
    </Container>
  );
}
