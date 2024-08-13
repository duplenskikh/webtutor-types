interface DnProgramDisciplDocumentTermPlanTheme {
  id_subj: XmlElem<number | null>;
  theme: XmlElem<string | null>;
  number_week: XmlElem<string | null>;
  hours_audit: XmlElem<number | null>;
  hours_independ: XmlElem<number | null>;
  educat_event_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  name_educat_event: XmlElem<string | null>;
}

interface DnProgramDisciplDocumentTerm {
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  laboriousn_all_term: XmlElem<number | null>;
  laboriousn_audit_term(): number;
  laboriousn_indep_term(): number;
  plan_themes: XmlMultiElem<DnProgramDisciplDocumentTermPlanTheme | null>;
}

interface DnProgramDisciplDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSubject {
  subject_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecialSpecialization {
  specializat_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
}

interface DnProgramDisciplDocumentSpecial {
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specializations: XmlMultiElem<DnProgramDisciplDocumentSpecialSpecialization | null>;
}

type DnProgramDisciplDocumentTopElem = XmlTopElem &
LectorsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgramDisciplDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number | null, DnAcademYearCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number | null, DnEducatFormCatalogDocumentTopElem>;
  control_form: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  all_laboriousn_audit: XmlElem<number | null>;
  all_laboriousn_indep: XmlElem<number | null>;
  terms: XmlMultiElem<DnProgramDisciplDocumentTerm | null>;
  desc: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnProgramDisciplDocumentDiscipline | null>;
  subjects: XmlMultiElem<DnProgramDisciplDocumentSubject | null>;
  specials: XmlMultiElem<DnProgramDisciplDocumentSpecial | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnProgramDisciplDocument = XmlDocument & {
  TopElem: DnProgramDisciplDocumentTopElem;
  dn_program_discipl: DnProgramDisciplDocumentTopElem;
  DocDesc(): string;
};
