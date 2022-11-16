import { Story } from "@storybook/react";
import { DropdownTitle, DropdownTitleProps } from "./DropdownTitle";

export default {
  title: "Atoms/DropdownTitle",
  component: DropdownTitle,
};

const Template: Story<DropdownTitleProps> = (args) => (
  <DropdownTitle {...args} />
);
export const Default = Template.bind({});
Default.args = {
  title: "support",
  dropdownType: "main",
};
