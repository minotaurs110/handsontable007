/// <reference path="../../scripts/handsontable.d.ts" />

// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
// tslint:disable
declare const System: any;
declare const ENV:string;
// google code-prettify
declare const PR:any;

declare const chroma: any;

declare module jasmine {
  interface Matchers {
    toHaveCssClass(expected: any): boolean;
  }
}
