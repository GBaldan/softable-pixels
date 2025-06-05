// External Libraries
import React from "react";

interface Props {
  color?: string;
  active?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Switch: React.FC<Props> = ({
  color,
  active = false,
  size = "medium",
  disabled = false,
  onClick,
}) => {
  // Functions
  function getSize() {
    switch (size) {
      case "small":
        return "h-4 w-8";
      case "medium":
        return "h-6 w-11";
      case "large":
        return "h-8 w-14";
      default:
        return "h-6 w-11";
    }
  }

  function getToggleSize() {
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

  function getBackgroundColor() {
    if (color) return `bg-${color}-600`;
    return active ? "bg-blue-600" : "bg-gray-300";
  }

  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={active}
      aria-disabled={disabled}
      className={`relative inline-flex items-center rounded-full transition-colors duration-300
        ${getSize()}
        ${getBackgroundColor()}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      onClick={disabled ? undefined : onClick}
    >
      <span
        className={`inline-block transform rounded-full bg-white transition-transform duration-300
        ${getToggleSize()}
          ${active ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
};
