export const debounce = (fn: (...args: any[]) => unknown, time: number): ((...args: any[]) => void) => {
  let timeout: number | null = null;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = (setTimeout(() => fn(...args), time) as unknown) as number;
  };
};
