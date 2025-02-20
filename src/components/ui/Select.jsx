import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SelectContent = ({ children }) => {
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

SelectContent.propTypes = {
  children: PropTypes.node.isRequired
};

const SelectItem = ({ value, children, onClick, selected }) => {
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
      className={`select-item px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 ${
        selected ? 'bg-blue-50' : ''
      }`}

    >
      {children}
    </li>
  );
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

const Select = ({ value, onValueChange, children, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const selectRef = useRef(null);

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedValue(value || '');
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && 
          !selectRef.current.contains(event.target) &&
          !event.target.closest('.select-item')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);




  return (
    <div className="relative" ref={selectRef}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <button
        type="button"
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
        aria-labelledby={label ? "select-label" : undefined}
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

export { Select, SelectItem, SelectContent };
