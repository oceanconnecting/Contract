export function Card({ children, className, ...props }) {
    return (
      <div className={`p-4 bg-white shadow rounded ${className}`} {...props}>
        {children}
      </div>
    )
  }
  