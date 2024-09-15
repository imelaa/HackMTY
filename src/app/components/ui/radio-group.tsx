import * as React from "react"

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  onValueChange?: (value: string) => void
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, onValueChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  return (
    <div onChange={handleChange} {...props}>
      {children}
    </div>
  )
}

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ className = "", ...props }) => (
  <input
    type="radio"
    className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 ${className}`}
    {...props}
  />
)