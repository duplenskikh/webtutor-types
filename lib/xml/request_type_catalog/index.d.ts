type RequestTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string | null>;
  /** Заявка групповая */
  is_group: XmlElem<boolean>;
  /** Запретить отклонять заявку ее автору */
  forbid_rejection: XmlElem<boolean>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Блок, в котором отображается */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Удаленное действие */
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
