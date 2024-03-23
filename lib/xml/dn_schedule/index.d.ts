interface DnScheduleDocumentScheduleElem {
  elem_id: XmlElem<string>;
  week_day_id: XmlElem<number, typeof common.week_days>;
  time: XmlElem<string>;
  periodic_type_id: XmlElem<string, typeof common.periodicity_types>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  edu_event_form_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  auditor_id: XmlElem<number, DnAuditoriumCatalogDocumentTopElem>;
}

type DnScheduleDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnScheduleDocument;
  code: XmlElem<string>;
  faculty: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
  schedule_elems: XmlMultiElem<DnScheduleDocumentScheduleElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnScheduleDocument = XmlDocument & {
  TopElem: DnScheduleDocumentTopElem;
  dn_schedule: DnScheduleDocumentTopElem;
  DocDesc(): string;
};
