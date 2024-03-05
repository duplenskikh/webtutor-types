type DnAcademDebtDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAcademDebtDocument;
  code: XmlElem<string>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.academ_debt_states>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  contr_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  latest_date: XmlElem<Date>;
  liquid_date: XmlElem<Date>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnAcademDebtDocument = XmlDocument & {
  TopElem: DnAcademDebtDocumentTopElem;
};
