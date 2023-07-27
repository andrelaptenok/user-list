export const highlightMatch = (text: string, filter: string) => {
  const regex = new RegExp(`(${filter})`, 'gi');
  return text.replace(regex, (match) => `<span style="background-color: var(--green-light)">${match}</span>`);
};
