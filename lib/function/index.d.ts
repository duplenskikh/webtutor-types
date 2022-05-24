/* eslint-disable @typescript-eslint/no-empty-interface */
interface Function { }
interface FunctionConstructor { }
declare interface CallableFunction extends Function { }
declare interface NewableFunction extends Function { }

declare var Function: FunctionConstructor;
