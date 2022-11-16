import { DropdownContainer } from "./DropdownItems.styles";
import { DropdownItem } from "../DropdowItem/DropdownItem";

export type DropdownItemsProps = {
  items: { title: string; icon?: JSX.Element }[];
  isVisible: boolean;
};
export const DropdownItems = ({
  items,
  isVisible = false,
}: DropdownItemsProps) => {
  return (
    <DropdownContainer>
      {items.map((item, index) => {
        return (
          <>
            <DropdownItem title={item.title} isVisible={isVisible}>
              {item.icon}
            </DropdownItem>
          </>
        );
      })}
    </DropdownContainer>
  );
};
