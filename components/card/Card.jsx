const Card = ({ imgUrl, imgName, alt }) => {
  return (
    <div>
      <a href='#'>
        <img src={imgUrl} alt={alt} />
        <h1>{imgName}</h1>
      </a>
    </div>
  );
};

export default Card;
