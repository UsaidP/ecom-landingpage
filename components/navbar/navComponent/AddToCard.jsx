import { BsCart3 } from "react-icons/bs";

function AddToCard({ className }) {
  return (
    <a href='#' className={`flex  ${className} `}>
      <BsCart3 className='text-xl' />
      <p className='mx-2'>Card</p>
    </a>
  );
}

export default AddToCard;
