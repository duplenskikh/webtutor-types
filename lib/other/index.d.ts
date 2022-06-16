/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
* Make all properties in T required
*/
type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
* Make all properties in T readonly
*/
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
* From T, pick a set of properties whose keys are in the union K
*/
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
* Construct a type with a set of properties K of type T
*/
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

/**
* Exclude from T those types that are assignable to U
*/
type Exclude<T, U> = T extends U ? never : T;

/**
* Extract from T those types that are assignable to U
*/
type Extract<T, U> = T extends U ? T : never;

/**
* Construct a type with the properties of T except for those in type K.
*/
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface IWTCommonEventStatusType {
  id: string;
  name: string;
  text_color: string;
  bk_color: string;
}

declare interface common extends Object {
  request_status_types: XmlMultiElem<IWTCommonEventStatusType>;
  event_status_types: XmlMultiElem<IWTCommonEventStatusType>;
  learning_states: XmlMultiElem<any>;
  resource_types: XmlMultiElem<any>;
  exchange_object_types: XmlMultiElem<any>;
  education_learning_states: XmlMultiElem<any>;
  career_reserve_status_types: XmlMultiElem<any>;
  career_reserve_tasks_types: XmlMultiElem<any>;
  learning_task_status_types: XmlMultiElem<any>;
}

declare var common: common;

interface categorys extends Object {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

declare var categorys: categorys;

declare var DefaultDb: string;
