// External Libraries
import React from "react";

interface Props {
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: (value: string) => void;
}

export const RadioButton: React.FC<Props> = ({
  name,
  label,
  value,
  size = "medium",
  checked = false,
  disabled = false,
  onChange,
}) => {
  // Functions
  function handleChange() {
    if (!disabled && onChange) {
      onChange(value);
    }
  }

  function getSize() {
    switch (size) {
      case "small":
        return "h-3 w-3";
      case "medium":
        return "h-4 w-4";
      case "large":
        return "h-5 w-5";
      default:
        return "h-4 w-4";
    }
  }

  return (
    <label
      className={`flex items-center gap-1 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={`form-radio text-blue-600 transition duration-150 ease-in-out
            ${getSize()}
            ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
          `}
      />

      {label ? (
        <span className="text-sm font-medium text-gray-900">{label}</span>
      ) : null}
    </label>
  );
};
