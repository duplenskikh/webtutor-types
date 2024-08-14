type ApplicationCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Тип */
  type: XmlElem<string, typeof common.application_types>;
  list_xms_url: XmlElem<string | null>;
  default_xms_url: XmlElem<string | null>;
  web_mode_id: XmlMultiElemObject<number | null, WebModeCatalogDocumentTopElem>;
  vendor: XmlElem<string | null>;
  vendor_library: XmlElem<string | null>;
  lic_type: XmlElem<string | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
