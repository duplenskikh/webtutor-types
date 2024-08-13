type PrintFormCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  type: XmlElem<string | null, typeof common.print_form_types>;
  /** Тип */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Файл */
  file_name: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
