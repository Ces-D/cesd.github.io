import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { A } from "../UI/Typography";

type Props = { colSpan: number; imgSrc: string; location: string };

const CardContainer = styled.div<{ colSpan: number }>`
  column-span: ${(props) => props.colSpan};
  padding: 0.5rem;
`;

const FillImageContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: 10em;
`;

export default function Card(props: Props) {
  return (
    <CardContainer colSpan={props.colSpan}>
      <Link href={props.location} passHref>
        <A>
          <FillImageContainer>
            <Image layout="fill" objectFit="contain" src={props.imgSrc} />
          </FillImageContainer>
        </A>
      </Link>
    </CardContainer>
  );
}
