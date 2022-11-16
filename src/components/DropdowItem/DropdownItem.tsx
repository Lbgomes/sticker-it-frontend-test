import { ItemContainer } from "./DropdownItem.styles";

export type DropdownItemProps = {
  title: string;
  children?: JSX.Element;
  isVisible: boolean;
};
export const DropdownItem = ({
  title,
  isVisible,
  children,
}: DropdownItemProps) => {
  return (
    <>
      <ItemContainer isVisible={isVisible}>
        {title}
        {children}
      </ItemContainer>
    </>
  );
};
