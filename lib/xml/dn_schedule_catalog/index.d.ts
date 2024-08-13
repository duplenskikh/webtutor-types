type DnScheduleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
