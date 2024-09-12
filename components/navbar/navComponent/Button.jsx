function Button({ children, className, ...props }) {
  return (
    <div>
      <button className={` ${className}`}>{children}</button>
    </div>
  );
}

export default Button;
