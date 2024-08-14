type CustomReportCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  object_name_type: XmlElem<string>;
  /** Объект */
  object_name: XmlElem<string | null>;
  /** Тип объекта */
  connect_2_object: XmlElem<string | null>;
  /** Категория */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Блок */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Подписка */
  subscription: XmlElem<boolean | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
