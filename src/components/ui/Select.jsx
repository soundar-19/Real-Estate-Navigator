import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';


const SelectContent = ({ children }) => {
SelectContent.propTypes = {
  children: PropTypes.node.isRequired
};

  return (
    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
      <div
        role="listbox" 
        className="max-h-60 overflow-auto w-full"
      >
        {children}
      </div>

    </div>
  );
};

const Select = ({ value, onValueChange, children, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedValue(value || '');
  }, [value]);


  return (
    <div className="relative">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
        aria-labelledby="select-label"
      >
        {selectedValue || 'Select'}

      </button>

      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
              selected: selectedValue === child.props.value

            })
          )}
        </SelectContent>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string
};


const SelectItem = ({ value, children, onClick, selected }) => {
SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

  return (
    <li
      role="option"
      aria-selected={selected}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 ${
        selected ? 'bg-blue-50' : ''
      }`}
    >



      {children}
    </li>
  );
};



Select.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string
};

export { Select, SelectItem, SelectContent };
