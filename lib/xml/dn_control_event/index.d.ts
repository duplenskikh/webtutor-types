interface DnControlEventControlAssessm {
  assessm_id?: XmlElem<number>;
}

interface DnControlEventParticipant {
  student_id?: XmlElem<number>;
}

interface DnControlEventViewFilter extends AuFtFilter {
}

interface DnControlEventView extends DescBase {
  filter?: XmlElem<DnControlEventViewFilter>;
}

interface DnControlEventTopElem extends XmlTopElem<DnControlEventDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  date_event?: XmlElem<Date>;
  status_id?: XmlElem<string>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  discipl_id?: XmlElem<number>;
  lector_id?: XmlElem<number>;
  control_form_id?: XmlElem<number>;
  lesson_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  stream_id?: XmlElem<number>;
  stud_group_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  control_assessms?: XmlMultiElem<DnControlEventControlAssessm>;
  participants?: XmlMultiElem<DnControlEventParticipant>;
  view?: XmlElem<DnControlEventView>;
}

type DnControlEventDocument = XmlDocument<DnControlEventTopElem>;
