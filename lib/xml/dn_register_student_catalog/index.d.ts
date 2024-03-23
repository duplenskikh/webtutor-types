type DnRegisterStudentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  register_id: XmlElem<number, DnRegisterCatalogDocumentTopElem>;
  code: XmlElem<string>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date>;
  contr_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
