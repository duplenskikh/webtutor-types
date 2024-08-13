type RemoteActionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteActionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string, typeof common.eval_types>;
  /** Комментарий */
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  link_name: XmlElem<string | null>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  /** Код */
  script: XmlElem<string | null>;
  default_disp_evaluate: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  evaluate(resultType: string, request: Request, argVars: unknown, configuration: string): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type RemoteActionDocument = XmlDocument & {
  TopElem: RemoteActionDocumentTopElem;
  remote_action: RemoteActionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
