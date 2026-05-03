
declare global {
  interface Window {
    JSZip: any;
  }
}

export interface IMedia {
  xlargeScreen: any;
  largeScreen: any;
  midScreen: any;
  pad: any;
  pc: any;
  smallpc: any;
  tablet: any;
  miniTablet: any;
  largePhone: any;
  phone: any;
  smallPhone: any;
};

export interface ITheme {
  theme: {
    body: string;
    logo: string;
    subtitle: string;
    color: string;
    link: string;
    text: string;
    button: string;
  }
};
