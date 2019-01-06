// Put type extensions here
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}
