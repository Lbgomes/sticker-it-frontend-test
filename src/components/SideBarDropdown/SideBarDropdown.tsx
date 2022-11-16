import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";
import { HeaderContent } from "../HeaderContent/HeaderContent";
import { Container, Title } from "./SideBarDropdown.styles";

export type SideBarDropdownProps = {
  title: string;
};

export const SideBarDropdown = ({ title }: SideBarDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Title onClick={() => setIsOpen(!isOpen)}>
        {title}
        <KeyboardArrowDownOutlined />
      </Title>
      {isOpen ? (
        <Container>
          <HeaderContent />
        </Container>
      ) : null}
    </>
  );
};
