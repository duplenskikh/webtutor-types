interface DnProgramDisciplDocumentTermPlanTheme {
  id_subj: XmlElem<number>;
  theme: XmlElem<string>;
  number_week: XmlElem<string>;
  hours_audit: XmlElem<number>;
  hours_independ: XmlElem<number>;
  educat_event_id: XmlElem<number>;
  name_educat_event: XmlElem<string>;
}

interface DnProgramDisciplDocumentTerm {
  term_id: XmlElem<number>;
  laboriousn_all_term(): number;
  laboriousn_audit_term(): number;
  laboriousn_indep_term(): number;
  plan_themes: XmlMultiElem<DnProgramDisciplDocumentTermPlanTheme>;
}

interface DnProgramDisciplDocumentDiscipline {
  discipline_id: XmlElem<number>;
}

interface DnProgramDisciplDocumentSubject {
  subject_id: XmlElem<number>;
}

interface DnProgramDisciplDocumentSpecialSpecialization {
  specializat_id: XmlElem<number>;
}
interface DnProgramDisciplDocumentSpecial {
  special_id: XmlElem<number>;
  specializations: XmlMultiElem<DnProgramDisciplDocumentSpecialSpecialization>;
}

type DnProgramDisciplDocumentTopElem = XmlTopElem &
LectorsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgramDisciplDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  educat_form_id: XmlElem<number>;
  control_form: XmlElem<number>;
  all_laboriousn_audit(): number;
  all_laboriousn_indep(): number;
  terms: XmlMultiElem<DnProgramDisciplDocumentTerm>;
  desc: XmlElem<string>;
  disciplines: XmlMultiElem<DnProgramDisciplDocumentDiscipline>;
  subjects: XmlMultiElem<DnProgramDisciplDocumentSubject>;
  specials: XmlMultiElem<DnProgramDisciplDocumentSpecial>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnProgramDisciplDocument = XmlDocument & {
  TopElem: DnProgramDisciplDocumentTopElem;
};
