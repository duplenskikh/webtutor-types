interface DnControlEventDocumentControlAssessm {
  assessm_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface DnControlEventDocumentParticipant {
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
}

type DnControlEventDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnControlEventDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  date_event: XmlElem<Date | null>;
  status_id: XmlElem<string | null, typeof common.lesson_states>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  lesson_id: XmlElem<number | null, DnLessonCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  control_assessms: XmlMultiElem<DnControlEventDocumentControlAssessm | null>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  participants: XmlMultiElem<DnControlEventDocumentParticipant | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnControlEventDocument = XmlDocument & {
  TopElem: DnControlEventDocumentTopElem;
  dn_control_event: DnControlEventDocumentTopElem;
  DocDesc(): string;
};
