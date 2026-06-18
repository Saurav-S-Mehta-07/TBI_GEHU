function Container({ children, className = '' }) {
  return <div className={`section-shell ${className}`}>{children}</div>;
}

export default Container;