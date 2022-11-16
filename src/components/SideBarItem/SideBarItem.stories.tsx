import { Story } from "@storybook/react";
import { SideBarItem } from "./SideBarItem";
export default {
  title: "Atoms/SideBarItem",
  component: SideBarItem,
};

const Template: Story = () => <SideBarItem title="Teste" />;
export const Default = Template.bind({});
