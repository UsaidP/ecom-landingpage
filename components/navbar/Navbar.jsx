import { Input, Logo, LoginBtn, AddToCard, Seller, More } from "../index";

import { useState } from "react";

function Navbar() {
  const [inputText, setInputText] = useState("");
  return (
    <div className='m-0  w-full bg-white'>
      <nav className='flex items-center p-2'>
        <div className=''>
          <Logo className='mr-12' />
        </div>
        <div className='mx-16'>
          <Input
            value={inputText}
            className={`p-1 min-w-96  outline-none`}
            placeholder={"Search for Products, Brands and more"}
            onChange={() => setInputText()}
          />
        </div>
        <LoginBtn />
        <AddToCard className={"mx-7 items-center"} />
        <Seller />
        <More />
      </nav>
    </div>
  );
}

export default Navbar;
