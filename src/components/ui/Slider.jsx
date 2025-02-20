import React from 'react';

const Slider = ({ value, onChange, min = 0, max = 100, step = 1, className = '' }) => {
  const handleChange = (e) => {
    onChange([Number(e.target.value)]);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <div className="h-2 bg-blue-600 rounded-l-lg" style={{ width: `${(value[0] / max) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default Slider;
