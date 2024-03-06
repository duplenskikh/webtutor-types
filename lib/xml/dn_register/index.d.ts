interface DnRegisterDocumentStudentMark {
  stud_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  mark_id: XmlElem<string, typeof common.type_marks>;
  mark_name: XmlElem<string>;
}

type DnRegisterDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnRegisterDocument;
  code: XmlElem<string>;
  control_event_id: XmlElem<number, DnControlEventCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.registr_types>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date>;
  contr_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  student_marks: XmlMultiElem<DnRegisterDocumentStudentMark>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnRegisterDocument = XmlDocument & {
  TopElem: DnRegisterDocumentTopElem;
  dn_register: DnRegisterDocumentTopElem;
  OnLocalInit(): unknown;
  DocDesc(): unknown;
};
