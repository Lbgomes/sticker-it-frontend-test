import { Story } from "@storybook/react";
import { DropdownItem, DropdownItemProps } from "./DropdownItem";

export default {
  title: "Atoms/DropdownItem",
  component: DropdownItem,
};

const Template: Story<DropdownItemProps> = (args) => <DropdownItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "support",
};
