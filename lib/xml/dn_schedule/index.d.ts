interface DnScheduleDocumentScheduleElem {
  elem_id: XmlElem<string | null>;
  week_day_id: XmlElem<number | null, typeof common.week_days>;
  time: XmlElem<string | null>;
  periodic_type_id: XmlElem<string | null, typeof common.periodicity_types>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  edu_event_form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  auditor_id: XmlElem<number | null, DnAuditoriumCatalogDocumentTopElem>;
}

type DnScheduleDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnScheduleDocument;
  code: XmlElem<string | null>;
  faculty: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  schedule_elems: XmlMultiElem<DnScheduleDocumentScheduleElem | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnScheduleDocument = XmlDocument & {
  TopElem: DnScheduleDocumentTopElem;
  dn_schedule: DnScheduleDocumentTopElem;
  DocDesc(): string;
};
