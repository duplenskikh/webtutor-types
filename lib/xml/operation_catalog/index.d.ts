type OperationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  /** Тип операции */
  operation_type: XmlElem<number | null>;
  /** Действие */
  action: XmlElem<string | null>;
  /** Применимо к следующим объектам */
  operation_catalog_list: XmlElem<string | null>;
  /** Название операции */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  group: XmlElem<string | null>;
  /** Является системным */
  is_system: XmlElem<boolean | null>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  use_script: XmlElem<boolean>;
  use_access_eval: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  priority: XmlElem<number>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
