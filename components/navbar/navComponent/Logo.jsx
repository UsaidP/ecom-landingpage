function Logo({ className }) {
  return (
    <div className={`flex ${className}`}>
      <img src='logo.svg' alt='logo' />
    </div>
  );
}

export default Logo;
