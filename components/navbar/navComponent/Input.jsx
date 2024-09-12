function Input({ label, value, onChange, placeholder, className, ...props }) {
  return (
    <div>
      <a
        className='flex w-full p-1 bg-slate-100 rounded-md items-center text-gray-900 '
        href='#'
      >
        <svg
          viewBox='0 0 512 512'
          fill='currentColor'
          height='1em'
          width='1em'
          {...props}
          className=' text-3xl w-8 p-1 '
        >
          <path
            fill='none'
            stroke='currentColor'
            strokeMiterlimit={10}
            strokeWidth={24}
            d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
          />
          <path
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeMiterlimit={10}
            strokeWidth={32}
            d='M338.29 338.29L448 448'
          />
        </svg>
        <input
          type='text'
          className={`${className} bg-slate-100`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </a>
    </div>
  );
}

export default Input;
