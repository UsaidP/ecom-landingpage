import Cards from "./card/Cards";
import Products from "./products/Products";
import Slider from "./sidebar/Slider";

const images = [
  "./SlideImg_1.png",
  "./SlideImg_2.png",
  "./SlideImg_3.png",
  "./SlideImg_4.png",
  "./SlideImg_5.png",
];
const Home = () => {
  return (
    <div>
      <Cards />
      <Slider images={images} />
      <Products />
    </div>
  );
};

export default Home;
