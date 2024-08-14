type ObjectDataTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Блок, в котором отображается */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
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
