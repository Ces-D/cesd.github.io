import { Title, Meta } from "@solidjs/meta";

type Props = {
  title?: string;
  description?: string;
};

export const MetaData = ({ title, description }: Props) => {
  const metadataTitle = !!title ? `${title} - Cesar Diaz` : "Cesar Diaz";
  return (
    <>
      <Title>{metadataTitle}</Title>
      <Meta name="description" content={description} />
    </>
  );
};
