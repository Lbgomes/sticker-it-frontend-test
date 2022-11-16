import { Story } from "@storybook/react";
import { Dropdown } from "./Dropdown";
export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
};
const items = [
  {
    title: "test 1",
  },
  {
    title: "test 2",
  },
  {
    title: "test 3",
  },
  {
    title: "test 4",
  },
];
const Template: Story = () => (
  <Dropdown dropdownType="main" items={items} title="test" />
);
export const Default = Template.bind({});
