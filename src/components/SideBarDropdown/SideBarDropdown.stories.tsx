import { Story } from "@storybook/react";
import { SideBarDropdown } from "./SideBarDropdown";
export default {
  title: "Atoms/SideBarDropdown",
  component: SideBarDropdown,
};

const Template: Story = () => <SideBarDropdown title="Teste" />;
export const Default = Template.bind({});
