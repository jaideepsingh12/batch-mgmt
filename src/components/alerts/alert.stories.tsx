import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
};
export const main = (args: any) => <Alert {...args}></Alert>;
main.args = {
  children: "This is just test code for storybook",
};
