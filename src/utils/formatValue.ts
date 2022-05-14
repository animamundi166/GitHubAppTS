const valueFormat = (value: number): string => {
  const units = ['', 'k', 'M'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1000 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1000;
  }
  return `${Number(scaledValue.toFixed(1))}${units[unitIndex]}`;
};

export default valueFormat;
