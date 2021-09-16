import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "../layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center w-full my-3">
        <div className="relative w-full h-40 sm:h-52 mb-3 ">
          <Image
            src="/Muhammad-Ali.jpg"
            layout="fill"
            objectFit="contain"
            alt="Muhammad Ali knocking down opponent"
          />
        </div>
        <button className="bg-dark text-light p-5 font-code rounded-md">
          <h1>Page In Production</h1>
          <p className="mt-2 font-code">
            In the mean time. Check out the
            <Link href="/blog">
              <a className="font-bold text-teal"> blog</a>
            </Link>
          </p>
        </button>
      </div>
    </Container>
  );
}