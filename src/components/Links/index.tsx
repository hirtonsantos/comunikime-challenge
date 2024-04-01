import React from "react";
import { Container } from "./style";
import Link from "next/link";

interface LinksProps {
  label: string;
  to: string;
}

const Links: React.FC<LinksProps> = ({ label, to }) => {
  return (
    <Container>
      <Link href={to}>{label}</Link>
    </Container>
  );
};

export default Links;
