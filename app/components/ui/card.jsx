export function Card({ children, className, ...props }) {
    return (
      <div className={`p-4 bg-blue100 shadow rounded ${className}`} {...props}>
        {children}
      </div>
    )
  }
  