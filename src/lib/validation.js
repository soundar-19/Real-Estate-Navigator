export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone) => {
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
};

export const validateRequired = (value) => {
  return value.trim() !== '';
};

export const validateMinLength = (value, min) => {
  return value.length >= min;
};

export const validateMaxLength = (value, max) => {
  return value.length <= max;
};

export const validateNumberRange = (value, min, max) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};

export const validateForm = (fields, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const value = fields[field] || '';
    rules[field].forEach((rule) => {
      if (!rule.validator(value, rule.params)) {
        errors[field] = rule.message;
      }
    });
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
