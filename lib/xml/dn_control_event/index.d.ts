interface DnControlEventDocumentControlAssessm {
  assessm_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface DnControlEventDocumentParticipant {
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
}

type DnControlEventDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnControlEventDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date_event: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.lesson_states>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  control_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  lesson_id: XmlElem<number, DnLessonCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  control_assessms: XmlMultiElem<DnControlEventDocumentControlAssessm>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  participants: XmlMultiElem<DnControlEventDocumentParticipant>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnControlEventDocument = XmlDocument & {
  TopElem: DnControlEventDocumentTopElem;
  dn_control_event: DnControlEventDocumentTopElem;
  DocDesc(): unknown;
};
