/** Consistent page head title helper */
export const headTitle = (message: string) => {
  return `${message} | Cesar Diaz`;
};

export const setDocumentClass = (newTheme: string) => {
  const currentTheme = window.document.documentElement.classList.item(0);
  if (currentTheme) {
    window.document.documentElement.classList.replace(currentTheme, newTheme);
  } else {
    window.document.documentElement.classList.add(newTheme);
  }
};
