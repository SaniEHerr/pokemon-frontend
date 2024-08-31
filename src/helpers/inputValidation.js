// inputValidation.js
export default function isValidInput (name, value) {
  if (name === 'name' && value.length > 10) {
    return false;
  }

  if (name === 'description' && (value.length > 220)) {
    return false;
  }

  if (['hp', 'attack', 'defense', 'speed', 'weight', 'height'].includes(name)) {
    // Validar que la longitud sea menor o igual a 3 y que el primer dígito no sea 0
    if (value.length > 3 || (value.length > 0 && value[0] === '0')) {
      return false;
    }

    // Validar que el valor sea numérico y esté en el rango permitido
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue < 0 || numericValue > 1001) {
      return false;
    }
  }

  return true;
};
