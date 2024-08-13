type DnRegisterStudentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  register_id: XmlElem<number | null, DnRegisterCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date | null>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
