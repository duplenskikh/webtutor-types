type DnProgramDisciplCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  all_laboriousn_audit: XmlElem<number>;
  all_laboriousn_indep: XmlElem<number>;
  control_form: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number, DnEducatFormCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
