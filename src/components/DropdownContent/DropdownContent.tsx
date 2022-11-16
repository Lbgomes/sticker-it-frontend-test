import { DropdownTitle } from "../DropdownTitle";
import {
  ChildContainer,
  Container,
  DropdownContainer,
} from "./DropdownContent.styles";
import { useState } from "react";

export type DropdownProps = {
  title: string;
  children: JSX.Element;
};

export const DropdownContent = ({ title, children }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container onMouseLeave={() => setIsVisible(false)}>
      <DropdownContainer>
        <DropdownTitle
          isOpen={isVisible}
          onMouseEnter={() => setIsVisible(true)}
          title={title}
          dropdownType="main"
        />
        <ChildContainer isVisible={isVisible}>{children}</ChildContainer>
      </DropdownContainer>
    </Container>
  );
};
