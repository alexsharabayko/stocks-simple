export const NUM_PREFIX_REG = /^\d+\. /;

export const clearKeys = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(item => clearKeys(item));
  }

  if (typeof obj === 'object' && obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce<any>((result, key) => {
      const value = clearKeys(obj[key]);

      if (NUM_PREFIX_REG.test(key)) {
        result[key.replace(NUM_PREFIX_REG, '')] = value;
      } else {
        result[key] = value;
      }

      return result;
    }, {})
  }

  return obj;
};
