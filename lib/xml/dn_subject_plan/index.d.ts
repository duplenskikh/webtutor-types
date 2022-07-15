interface DnSubjectPlanViewFilter extends AuFtFilter {
}

interface DnSubjectPlanView {
  filter?: XmlElem<DnSubjectPlanViewFilter>;
}

interface DnSubjectPlanTopElem extends XmlTopElem<DnSubjectPlanDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  subject?: XmlElem<string>;
  program_discipline_id?: XmlElem<number>;
  prog_disc_append_id?: XmlElem<number>;
  educat_event_id?: XmlElem<number>;
  hours?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnSubjectPlanView>;
}

type DnSubjectPlanDocument = XmlDocument<DnSubjectPlanTopElem>;
