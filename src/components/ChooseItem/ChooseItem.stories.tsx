import { Story } from "@storybook/react";
import { ChooseItem } from "./ChooseItem";
export default {
  title: "Atoms/ChooseItem",
  component: ChooseItem,
};

const Template: Story = () => <ChooseItem />;
export const Default = Template.bind({});
