interface DnIndEducatPlanDocumentContrlTermEvent {
  event_id: XmlElem<string>;
  theme_id: XmlElem<number, DnSubjectPlanCatalogDocumentTopElem>;
  period: XmlElem<Date>;
  kind_term_event: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  form_term_event: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  mark_min: XmlElem<number>;
  mark_max: XmlElem<number>;
}

type DnIndEducatPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnIndEducatPlanDocument;
  code: XmlElem<string>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  control_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  is_course_work: XmlElem<string, typeof common.work_types>;
  theme_course_work: XmlElem<string>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  contrl_term_events: XmlMultiElem<DnIndEducatPlanDocumentContrlTermEvent>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnIndEducatPlanDocument = XmlDocument & {
  TopElem: DnIndEducatPlanDocumentTopElem;
  dn_ind_educat_plan: DnIndEducatPlanDocumentTopElem;
  DocDesc(): string;
};
