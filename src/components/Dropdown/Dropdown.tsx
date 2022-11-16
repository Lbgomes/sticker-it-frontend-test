import { DropdownItems } from "../DropdowItems/DropdownItems";
import { DropdownTitle } from "../DropdownTitle";
import {
  ChildContainer,
  Container,
  DropdownContainer,
} from "./Dropdown.styles";
import Flag from "../../assets/Vector.png";
import { useState } from "react";

export type DropdownProps = {
  title: string | JSX.Element;
  dropdownType: "main" | "second";
  items: any;
};

export const Dropdown = ({ title, dropdownType, items }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <DropdownContainer onMouseLeave={() => setIsVisible(false)}>
        <DropdownTitle
          isOpen={isVisible}
          onMouseEnter={() => setIsVisible(true)}
          title={title}
          dropdownType={dropdownType}
        />
        <ChildContainer isVisible={isVisible}>
          <DropdownItems items={items} isVisible={isVisible} />
        </ChildContainer>
      </DropdownContainer>
    </Container>
  );
};
