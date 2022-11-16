import { Dropdown } from "../Dropdown";
import {
  Container,
  HamburguerContainer,
  Info,
  Main,
  MobileContainer,
  Title,
  WebContainer,
} from "./Header.styles";
import { theme } from "../..";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { DropdownContent } from "../DropdownContent/DropdownContent";
import { ChooseGroup } from "../ChooseGroup/ChooseGroup";
import { GroupProducts } from "../GroupProducts/GroupProducts";
import { SideBar } from "../SideBar/SideBar";
import { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const support = [
    {
      title: "How to order",
    },
    {
      title: "Delivery information",
    },
    {
      title: "Track my order",
    },
    {
      title: "Help & learn",
    },
    {
      title: "returns",
    },
    {
      title: "contact",
    },
  ];
  const about = [
    {
      title: "About Our history",
    },
    {
      title: "Blog",
    },
    {
      title: "Carrer",
    },
    {
      title: "Culture",
    },
  ];
  return (
    <>
      <Container>
        <WebContainer>
          <h1>STICKER IT</h1>
          <Main>
            <DropdownContent title="stickers">
              <GroupProducts />
            </DropdownContent>
            <DropdownContent title="labels">
              <GroupProducts />
            </DropdownContent>
            <Title>create a design</Title>
            <DropdownContent title="help me choose">
              <ChooseGroup />
            </DropdownContent>
            <Title>reorder</Title>
          </Main>
          <Info>
            <Dropdown dropdownType="second" items={support} title="support" />
            <Dropdown dropdownType="second" items={about} title="about" />
            <PersonIcon className="icon" />
            <SearchOutlined className="icon" />
            <ShoppingBagIcon className="icon" />
          </Info>
        </WebContainer>
      </Container>
      <MobileContainer>
        <HamburguerContainer onClick={() => setIsOpen(true)}>
          <MenuIcon className="hamburguer" />
        </HamburguerContainer>
        <h1>STICKER IT</h1>
        <ShoppingBagIcon className="bag" />
        {isOpen ? <SideBar setIsOpen={setIsOpen} /> : null}
      </MobileContainer>
    </>
  );
};
