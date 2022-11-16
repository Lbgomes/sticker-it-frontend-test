import { Story } from "@storybook/react";
import { ChooseGroup } from "../ChooseGroup/ChooseGroup";
import { DropdownContent } from "./DropdownContent";
export default {
  title: "Molecules/DropdownContent",
  component: DropdownContent,
};

const Template: Story = () => (
  <DropdownContent title="test">
    <ChooseGroup />
  </DropdownContent>
);
export const Default = Template.bind({});
