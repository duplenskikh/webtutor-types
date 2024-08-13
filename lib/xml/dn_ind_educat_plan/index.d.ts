interface DnIndEducatPlanDocumentContrlTermEvent {
  event_id: XmlElem<string | null>;
  theme_id: XmlElem<number | null, DnSubjectPlanCatalogDocumentTopElem>;
  period: XmlElem<Date | null>;
  kind_term_event: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  form_term_event: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  mark_min: XmlElem<number | null>;
  mark_max: XmlElem<number | null>;
}

type DnIndEducatPlanDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnIndEducatPlanDocument;
  code: XmlElem<string | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  is_course_work: XmlElem<string | null, typeof common.work_types>;
  theme_course_work: XmlElem<string | null>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  contrl_term_events: XmlMultiElem<DnIndEducatPlanDocumentContrlTermEvent | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnIndEducatPlanDocument = XmlDocument & {
  TopElem: DnIndEducatPlanDocumentTopElem;
  dn_ind_educat_plan: DnIndEducatPlanDocumentTopElem;
  DocDesc(): string;
};
