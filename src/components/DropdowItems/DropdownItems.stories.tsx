import { Story } from "@storybook/react";
import { DropdownItems, DropdownItemsProps } from "./DropdownItems";

export default {
  title: "Atoms/DropdownItems",
  component: DropdownItems,
};

const Template: Story<DropdownItemsProps> = (args) => (
  <DropdownItems {...args} />
);
export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "test 1",
    },
    {
      title: "test 2",
    },
    {
      title: "test 3",
    },
  ],
};
