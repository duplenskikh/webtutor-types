type OperationDocumentTopElem = XmlTopElem &
MsParametersBase &
WebVariablesBase & {
  Doc: OperationDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  /** Является системной */
  is_system: XmlElem<boolean>;
  priority: XmlElem<number>;
  /** Операция */
  action: XmlElem<string | null>;
  /** Тип */
  operation_type: XmlElem<number>;
  /** Объект базы */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Применимо к следующим объектам */
  operation_catalog_list: XmlElem<string | null>;
  group: XmlElem<string | null>;
  /** Код JS */
  script: XmlElem<string | null>;
  /** Пост код */
  post_code: XmlElem<string | null>;
  /** Программный код */
  eval_code: XmlElem<string | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Формула условия видимости */
  access_eval_code: XmlElem<string | null>;
  use_access_eval(): unknown;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  execute(parameters: unknown, variables: unknown): unknown;
};

type OperationDocument = XmlDocument & {
  TopElem: OperationDocumentTopElem;
  operation: OperationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
