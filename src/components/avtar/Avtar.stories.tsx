import Avtar from "./Avtar";
import "../../index.css";
export default {
  title: "Avtar",
  component: Avtar,
};

export const main = (args: any) => <Avtar {...args}></Avtar>;
main.args = {
  //   shownotificatoin: Boolean,
};
