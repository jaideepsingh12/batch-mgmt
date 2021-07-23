import AvtarStack from "./AvtarStack";
import "../../index.css";

export default {
  title: "AvtarStack",
  component: AvtarStack,
};
export const Main = (args: any) => <AvtarStack {...args}></AvtarStack>;
Main.args = {
  stacklength: 4,
  size: "md",
  children: [
    "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_1920,c_limit/best-face-oil.png",
    "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
    "https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg",
    "https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=170667a&w=0&h=3DB6ScZMBuq5W3755x_ZJPS7jHtgtA0GFYo7EdGGy78=",
    "https://www.byrdie.com/thmb/kAXw1ZXSfixyaiIjLt0tVfRzhhs=/843x1024/filters:fill(auto,1)/GettyImages-1035308964-5d15a77127854247b5c841d339a546c0.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kmxRH75UUzUdJR_nJS1g3okFJFyZeSv7IQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL17fZHkmmrXz8BupXTxnnoJxstS7d4VDoZQ&usqp=CAU",
    "https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg",
    "https://i.pinimg.com/474x/18/48/f5/1848f52697ad28896248b6af0839b39a.jpg",
    "https://image.shutterstock.com/image-photo/beautiful-young-woman-clean-fresh-260nw-1686925639.jpg",
  ],
};
