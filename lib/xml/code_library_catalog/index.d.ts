type CodeLibraryCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  code_type: XmlElem<string | null>;
  /** Ссылка на шаблон */
  code_url: XmlElem<string | null>;
  associated_applications_id: XmlMultiElemObject<number | null, ApplicationCatalogDocumentTopElem>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
