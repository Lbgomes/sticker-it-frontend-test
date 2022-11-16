import { Story } from "@storybook/react";
import { HeaderContent } from "./HeaderContent";
export default {
  title: "Atoms/HeaderContent",
  component: HeaderContent,
};

const Template: Story = () => <HeaderContent />;
export const Default = Template.bind({});
