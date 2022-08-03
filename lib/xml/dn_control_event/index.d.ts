interface DnControlEventDocumentControlAssessm {
  assessm_id: XmlElem<number>;
}

interface DnControlEventDocumentParticipant {
  student_id: XmlElem<number>;
}

type DnControlEventDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnControlEventDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date_event: XmlElem<Date>;
  status_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipl_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  control_form_id: XmlElem<number>;
  lesson_id: XmlElem<number>;
  desc: XmlElem<string>;
  control_assessms: XmlMultiElem<DnControlEventDocumentControlAssessm>;
  stream_id: XmlElem<number>;
  stud_group_id: XmlElem<number>;
  participants: XmlMultiElem<DnControlEventDocumentParticipant>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnControlEventDocument = XmlDocument & {
  TopElem: DnControlEventDocumentTopElem;
};
