interface DnProgramDisciplDocumentTermPlanTheme {
  id_subj: XmlElem<number>;
  theme: XmlElem<string>;
  number_week: XmlElem<string>;
  hours_audit: XmlElem<number>;
  hours_independ: XmlElem<number>;
  educat_event_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  name_educat_event: XmlElem<string>;
}

interface DnProgramDisciplDocumentTerm {
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
  laboriousn_all_term: XmlElem<number>;
  laboriousn_audit_term(): unknown;
  laboriousn_indep_term(): unknown;
  plan_themes: XmlMultiElem<DnProgramDisciplDocumentTermPlanTheme>;
}

interface DnProgramDisciplDocumentDiscipline {
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSubject {
  subject_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecialSpecialization {
  specializat_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecial {
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specializations: XmlMultiElem<DnProgramDisciplDocumentSpecialSpecialization>;
}

type DnProgramDisciplDocumentTopElem = XmlTopElem &
LectorsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgramDisciplDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number, DnEducatFormCatalogDocumentTopElem>;
  control_form: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  all_laboriousn_audit: XmlElem<number>;
  all_laboriousn_indep: XmlElem<number>;
  terms: XmlMultiElem<DnProgramDisciplDocumentTerm>;
  desc: XmlElem<string>;
  disciplines: XmlMultiElem<DnProgramDisciplDocumentDiscipline>;
  subjects: XmlMultiElem<DnProgramDisciplDocumentSubject>;
  specials: XmlMultiElem<DnProgramDisciplDocumentSpecial>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnProgramDisciplDocument = XmlDocument & {
  TopElem: DnProgramDisciplDocumentTopElem;
};
