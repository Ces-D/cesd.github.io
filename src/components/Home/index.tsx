import React from "react";
import Image from "next/image";

import Container from "../Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full my-3">
        <div className="bg-sky rounded-full h-96 w-full opacity-40 absolute z-0 bottom-3" />
        <div className="relative w-full h-40 sm:h-52 bg-dark">
          <Image src="/Muhammad-Ali.jpg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </Container>
  );
}
