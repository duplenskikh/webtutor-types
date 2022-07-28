interface DnRegisterDocumentStudentMark {
  stud_id: XmlElem<number>;
  mark_id: XmlElem<string>;
  mark_name: XmlElem<string>;
}

type DnRegisterDocumentTopElem = XmlTopElem & { Doc: DnRegisterDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  control_event_id: XmlElem<number>;
  type_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipl_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  date_event: XmlElem<Date>;
  contr_form_id: XmlElem<number>;
  stud_group_id: XmlElem<number>;
  student_marks: XmlMultiElem<DnRegisterDocumentStudentMark>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnRegisterDocument = XmlDocument & { TopElem: DnRegisterDocumentTopElem; };
