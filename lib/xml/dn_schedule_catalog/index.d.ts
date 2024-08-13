type DnScheduleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Факультет */
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
