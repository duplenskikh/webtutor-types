interface DnProgramDisciplTermPlanTheme {
  id_subj?: XmlElem<number>;
  theme?: XmlElem<string>;
  number_week?: XmlElem<string>;
  hours_audit?: XmlElem<number>;
  hours_independ?: XmlElem<number>;
  educat_event_id?: XmlElem<number>;
  name_educat_event?: XmlElem<string>;
}

interface DnProgramDisciplTerm {
  term_id?: XmlElem<number>;
  laboriousn_all_term?: XmlElem<number>;
  laboriousn_audit_term?: XmlElem<number>;
  laboriousn_indep_term?: XmlElem<number>;
  plan_themes?: XmlMultiElem<DnProgramDisciplTermPlanTheme>;
}

interface DnProgramDisciplDiscipline {
  discipline_id?: XmlElem<number>;
}

interface DnProgramDisciplSubject {
  subject_id?: XmlElem<number>;
}

interface DnProgramDisciplSpecialSpecialization {
  specializat_id?: XmlElem<number>;
}

interface DnProgramDisciplSpecial {
  special_id?: XmlElem<number>;
  specializations?: XmlMultiElem<DnProgramDisciplSpecialSpecialization>;
}

interface DnProgramDisciplTopElem extends XmlTopElem<DnProgramDisciplDocument>, LectorsBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status_id?: XmlElem<string>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  discipline_id?: XmlElem<number>;
  academ_year_id?: XmlElem<number>;
  educat_form_id?: XmlElem<number>;
  control_form?: XmlElem<number>;
  all_laboriousn_audit?: XmlElem<number>;
  all_laboriousn_indep?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  terms?: XmlMultiElem<DnProgramDisciplTerm>;
  disciplines?: XmlMultiElem<DnProgramDisciplDiscipline>;
  subjects?: XmlMultiElem<DnProgramDisciplSubject>;
  specials?: XmlMultiElem<DnProgramDisciplSpecial>;
}

type DnProgramDisciplDocument = XmlDocument<DnProgramDisciplTopElem>;
