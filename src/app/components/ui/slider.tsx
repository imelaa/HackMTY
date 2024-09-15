import * as React from "react"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: number[]) => void
}

export const Slider: React.FC<SliderProps> = ({ className = "", onValueChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange([parseInt(e.target.value)])
    }
  }

  return (
    <input
      type="range"
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
      onChange={handleChange}
      {...props}
    />
  )
}