import Card from "./Card";

const Cards = () => {
  return (
    <div className='flex md:mx-16  px-32 font-semibold text-center py-4 bg-white items-center justify-between'>
      <Card imgUrl={"Grocery.png"} imgName={"Grocery"} alt={"grocery"} />
      <Card imgUrl={"mobile.png"} imgName={"Mobile"} alt={"mobile"} />
      <Card imgUrl={"fashion.png"} imgName={"Fashion"} alt={"Fashion"} />

      <Card
        imgUrl={"Electronics.png"}
        imgName={"Electronics"}
        alt={"electronics"}
      />
      <Card imgUrl={"furniture.png"} imgName={"Furniture"} alt={"furniture"} />
      <Card
        imgUrl={"Appliances.png"}
        imgName={"Appliances"}
        alt={"appliances"}
      />
      <Card imgUrl={"Travel.png"} imgName={"Travel"} alt={"travel"} />

      <Card
        imgUrl={"BeautyToyes.png"}
        imgName={"Beauty Toys & More"}
        alt={"beauty"}
      />
      <Card
        imgUrl={"TwoWheelers.png"}
        imgName={"Two Wheelers"}
        alt={"beauty"}
      />
    </div>
  );
};

export default Cards;
