function Container({ children, className = '' }) {
  return <div className={`container-shell${className ? ` ${className}` : ''}`}>{children}</div>;
}

export default Container;
