type DnAcademDebtDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAcademDebtDocument;
  code: XmlElem<string | null>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.academ_debt_states>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  latest_date: XmlElem<Date | null>;
  liquid_date: XmlElem<Date | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnAcademDebtDocument = XmlDocument & {
  TopElem: DnAcademDebtDocumentTopElem;
  dn_academ_debt: DnAcademDebtDocumentTopElem;
  DocDesc(): string;
};
