import React, { useState } from 'react';

const SelectContent = ({ children }) => {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
      <ul
        role="listbox"
        className="max-h-60 overflow-auto"
      >
        {children}
      </ul>
    </div>
  );
};

const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newValue) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {value || 'Select'}

      </button>

      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
              selected: value === child.props.value
            })
          )}
        </SelectContent>
      )}
    </div>
  );
};

const SelectItem = ({ value, children, onClick, selected }) => {
  return (
    <li
      role="option"
      aria-selected={selected}
      onClick={onClick}
      className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${
        selected ? 'bg-blue-50' : ''
      }`}
    >
      {children}
    </li>
  );
};

export { Select, SelectItem, SelectContent };
