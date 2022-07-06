import dark from './dark';
import light from './light';

export type ThemeProps = {
  theme: {
    backgroundColor: string,
    headerBackgroundColor: string,
    textColor: string,
    borderColor: string,
    backgroundColorCard: string,
    inputBackgroundColor: string,
  }
}

export default { dark, light };
