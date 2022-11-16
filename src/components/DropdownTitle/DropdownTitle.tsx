import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import { Container, Dropdown } from "./DropdownTitle.styles";
import { useState } from "react";
export type DropdownTitleProps = {
  title: string | JSX.Element;
  dropdownType?: "main" | "second";
  onMouseEnter: any;
  isOpen: boolean;
};
export const DropdownTitle = ({
  title,
  dropdownType,
  onMouseEnter,
  isOpen,
}: DropdownTitleProps) => {
  return (
    <Container onMouseEnter={onMouseEnter}>
      <Dropdown isOpen={isOpen} dropdownType={dropdownType}>
        {title}
        <KeyboardArrowUpOutlined />
      </Dropdown>
    </Container>
  );
};
