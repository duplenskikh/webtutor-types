type FileSourceCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /** Доступен поиск по источнику */
  search_available: XmlElem<boolean>;
  /** Доступен выбор файлов из источника */
  selection_available: XmlElem<boolean>;
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
