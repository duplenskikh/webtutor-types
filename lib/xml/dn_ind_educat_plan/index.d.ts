interface DnIndEducatPlanContrlTermEvent {
  event_id?: XmlElem<string>;
  theme_id?: XmlElem<number>;
  period?: XmlElem<Date>;
  kind_term_event?: XmlElem<number>;
  form_term_event?: XmlElem<number>;
  mark_min?: XmlElem<number>;
  mark_max?: XmlElem<number>;
}

interface DnIndEducatPlanTopElem extends XmlTopElem<DnIndEducatPlanDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  student_id?: XmlElem<number>;
  discipline_id?: XmlElem<number>;
  prog_discipl_id?: XmlElem<number>;
  control_form_id?: XmlElem<number>;
  is_course_work?: XmlElem<string>;
  theme_course_work?: XmlElem<string>;
  chair_id?: XmlElem<number>;
  lector_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  contrl_term_events?: XmlMultiElem<DnIndEducatPlanContrlTermEvent>;
}

type DnIndEducatPlanDocument = XmlDocument<DnIndEducatPlanTopElem>;
