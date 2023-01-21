export type logo = SVGImageElement;

declare module '*postcss.config.js' {
  export interface Options {
    plugins: Plugin[];
  }
}

declare module '*jest.config.js' {
  export interface Options {
    plugins: Plugin[];
  }
}
