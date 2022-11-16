import { Story } from "@storybook/react";
import { ChooseGroup } from "./ChooseGroup";

export default {
  title: "Molecules/ChooseGroup",
  component: ChooseGroup,
};

const Template: Story = () => <ChooseGroup />;
export const Default = Template.bind({});
// Default.args = {
//   title: "support",
// };
