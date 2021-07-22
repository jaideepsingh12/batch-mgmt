import ProBar from "./ProBar";
import "../../index.css";
export default {
  title: "ProBar",
  component: ProBar,
};
export const Main = (args: any) => <ProBar {...args}></ProBar>;
Main.args = {
  backgroundColor: "red",
  width: "0",
};
