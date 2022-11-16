import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";
import { SideBarDropdown } from "../SideBarDropdown/SideBarDropdown";
import { Container, Title } from "./SideBarItem.styles";

export type SideBarItemProps = {
  title: string;
};

export const SideBarItem = ({ title }: SideBarItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Title onClick={() => setIsOpen(!isOpen)}>
        {title}
        <KeyboardArrowDownOutlined />
      </Title>
      {isOpen ? (
        <Container>
          <Title>View all</Title>
          <SideBarDropdown title="Most popular" />
          <SideBarDropdown title="Sustantial stickers" />
          <SideBarDropdown title="Others ways to shop" />
        </Container>
      ) : null}
    </>
  );
};
