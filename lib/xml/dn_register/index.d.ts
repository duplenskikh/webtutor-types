interface DnRegisterDocumentStudentMark {
  stud_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  mark_id: XmlElem<string | null, typeof common.type_marks>;
  mark_name: XmlElem<string | null>;
}

type DnRegisterDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnRegisterDocument;
  code: XmlElem<string | null>;
  control_event_id: XmlElem<number | null, DnControlEventCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.registr_types>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date | null>;
  contr_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  student_marks: XmlMultiElem<DnRegisterDocumentStudentMark | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnRegisterDocument = XmlDocument & {
  TopElem: DnRegisterDocumentTopElem;
  dn_register: DnRegisterDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
