import React from "react";

const PrimaryButton = ({ className, text = "hi" }) => {
  const baseClasses = "group";
  return (
    <button
      data-component="primary-button"
      className={`${baseClasses} ${className}`}
    >
      <div className="text-primary border-primary border transform group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-hover:shadow-[4px_4px_0_0_var(--primary)] px-6 py-3 rounded-md transition-all duration-250 ease-[cubic-bezier(0.645,0.045,0.355,1)]">
        {text}
      </div>
    </button>
  );
};

export default PrimaryButton;
