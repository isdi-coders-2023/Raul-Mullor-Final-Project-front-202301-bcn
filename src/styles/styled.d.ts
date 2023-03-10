import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };
    colors: {
      mainColorText: string;
      mainColorButton: string;
      secondaryColorButton: string;
      secondaryColorText: string;
    };
  }
}
