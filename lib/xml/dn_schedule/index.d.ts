interface DnScheduleDocumentScheduleElem {
  elem_id: XmlElem<string>;
  week_day_id: XmlElem<number>;
  time: XmlElem<string>;
  periodic_type_id: XmlElem<string>;
  discipl_id: XmlElem<number>;
  edu_event_form_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  stream_id: XmlElem<number>;
  stud_group_id: XmlElem<number>;
  auditor_id: XmlElem<number>;
}

type DnScheduleDocumentTopElem = XmlTopElem & { Doc: DnScheduleDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  faculty: XmlElem<number>;
  chair: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  term_id: XmlElem<number>;
  schedule_elems: XmlMultiElem<DnScheduleDocumentScheduleElem>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnScheduleDocument = XmlDocument & { TopElem: DnScheduleDocumentTopElem; };
