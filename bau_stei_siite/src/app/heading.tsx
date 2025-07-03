import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`text-center my-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
