export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
};

export const validateRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim() !== '';
  }
  return value !== undefined && value !== null;
};


export const validateMinLength = (value, min) => {
  return value.length >= min;
};

export const validateMaxLength = (value, max) => {
  return value.length <= max;
};

export const validateNumberRange = (value, min, max) => {
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};


export const validateForm = (fields, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const value = fields[field] || '';
    let fieldValid = true;
    
    // Check all validation rules for this field
    for (const rule of rules[field]) {
      if (!rule.validator(value, rule.params)) {
        errors[field] = rule.message;
        fieldValid = false;
        break; // Stop at first error for this field
      }
    }
    
    // If field is valid, remove any previous error
    if (fieldValid && errors[field]) {
      delete errors[field];
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
