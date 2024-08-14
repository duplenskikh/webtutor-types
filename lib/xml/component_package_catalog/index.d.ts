type ComponentPackageCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Пакет (*.zip) */
  download_package_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Дата загрузки */
  download_date: XmlElem<Date | null>;
  type_id: XmlElem<string | null, typeof common.access_block_types>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата загрузки */
  component_modification_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
