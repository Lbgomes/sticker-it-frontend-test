import { useRef, useState } from "react";
import {
  Container,
  SideBarContainer,
  DropdownContainer,
  Title,
  SearchContainer,
} from "./SideBar.styles";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { SearchOutlined } from "@mui/icons-material";
import { useClickAway } from "react-use";
export type SideBarProps = {
  setIsOpen: any;
};
export const SideBar = ({ setIsOpen }: SideBarProps) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <Container>
        <SideBarContainer ref={ref}>
          <DropdownContainer>
            <SideBarItem title="stickers" />
            <SideBarItem title="labels" />
            <SideBarItem title="create a design" />
            <SideBarItem title="help me choose" />
            <SideBarItem title="reorder" />
          </DropdownContainer>
          <Title>
            Support
            <KeyboardArrowDownOutlined />
          </Title>
          <Title>
            About
            <KeyboardArrowDownOutlined />
          </Title>
          <Title>
            Login / Register
            <KeyboardArrowDownOutlined />
          </Title>
          <SearchContainer>
            <InputBase placeholder="Search for anything" />
            <SearchOutlined />
          </SearchContainer>
        </SideBarContainer>
      </Container>
    </>
  );
};
