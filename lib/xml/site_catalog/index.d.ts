type SiteCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дизайн */
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  /** Язык */
  lng_id: XmlElem<string | null>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Является встроенным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Владельцы */
  owner_object: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
