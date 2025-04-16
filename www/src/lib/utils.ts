import { theme } from './types';

/** Consistent page head title helper */
export const headTitle = (message: string) => {
  return `${message} | Cesar Diaz`;
};

export const getCurrentTheme = () => {
  const target = window.document.documentElement;
  const currentThemeParse = theme.safeParse(target.getAttribute('data-theme'));
  return {
    currentTheme: currentThemeParse.success ? currentThemeParse.data : theme.enum.light,
    target,
  };
};
