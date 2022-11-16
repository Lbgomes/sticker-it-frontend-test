import { Story } from "@storybook/react";
import { SideBar, SideBarProps } from "./SideBar";
export default {
  title: "Molecules/SideBar",
  component: SideBar,
};

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;
export const Default = Template.bind({});
Default.args = {
  setIsOpen: true,
};
