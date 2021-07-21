import Button from "./button";
import "../../index.css";
import { HiLockClosed, HiLogin, HiMoon } from "react-icons/hi";
const icons = { HiLockClosed, HiLogin, HiMoon };
const XYZ = {
  title: "My awesome button",
  component: Button,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          HiLockClosed: "closed lock",
          HiLogin: "Login Icon",
          HiMoon: "Moon",
        },
      },
    },
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};
export default XYZ;
export const main = (args: any) => <Button {...args}></Button>;

main.args = {
  children: "Log out",
  className: "",
  Icon: HiLockClosed,
  // theme: ["primary", "secondary"],
  day: true,
};
