interface Error {
  message: string;
  code: number;
}

interface ErrorConstructor {
  new(message?: string): Error;
  (message?: string): Error;
}

/**
 * @param {string} str - строка с текстом ошибки (String).
 * @returns string
 * UserError(str)
*/
declare let Error: ErrorConstructor;
declare let UserError: ErrorConstructor;
