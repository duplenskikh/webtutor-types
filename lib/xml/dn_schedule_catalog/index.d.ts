type DnScheduleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  faculty: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
