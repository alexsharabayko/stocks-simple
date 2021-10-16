export const NUM_PREFIX_REG = /^\d+\. /;

export const clearKeys = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(item => clearKeys(item));
  }

  if (typeof obj === 'object' && obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce<any>((result, key) => {
      const value = clearKeys(obj[key]);
      let cleanKey = NUM_PREFIX_REG.test(key) ? key.replace(NUM_PREFIX_REG, '') : key;

      if (cleanKey && cleanKey.length) {
        cleanKey = cleanKey.charAt(0).toLowerCase() + cleanKey.substring(1);
      }

      result[cleanKey] = value;

      return result;
    }, {})
  }

  return obj;
};
