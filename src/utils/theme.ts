import { Basics } from 'styles';
import { ITheme } from 'types';

export const lightTheme: ITheme['theme'] = {
  body: Basics.colors.creamWhite,
  logo: Basics.colors.black,
  subtitle: '#555555',
  color: Basics.colors.black,
  link: '#2844A0',
  text: '#363537',
  button: '#2844A0',
};

export const darkTheme: ITheme['theme'] = {
  body: Basics.colors.black,
  logo: Basics.colors.white,
  subtitle: '#aaaaaa',
  color: Basics.colors.nightShift,
  link: '#6B8AFF',
  text: '#FAFAFA',
  button: '#6B8AFF',
};
