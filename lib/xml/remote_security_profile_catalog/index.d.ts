type RemoteSecurityProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
