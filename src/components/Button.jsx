function Button({ type, suffix, children }) {
  return (
    <button className={type}>
      {children} <span>{suffix}</span>
    </button>
  );
}

export default Button;
