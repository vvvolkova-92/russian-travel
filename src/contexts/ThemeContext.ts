interface IThemes<T> {
  dark: T;
  light: T;
}
export const themes:IThemes<string> = {
  dark: 'dark',
  light: 'light',
}