interface DnStudentDocumentEducatGroup {
  edu_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
}

type DnStudentDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
InsertFileBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudentDocument;
  code: XmlElem<string | null>;
  type: XmlElem<string, typeof common.stud_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  mod_name: XmlElem<PersonNameBase | null>;
  region: XmlElem<string | null>;
  adress_fact_live: XmlElem<string | null>;
  need_conduct: XmlElem<boolean>;
  is_conduct: XmlElem<boolean>;
  is_benefits: XmlElem<boolean>;
  special_id: XmlElem<number | null, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number | null, DnSpecializationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<string | null, DnEducatFormCatalogDocumentTopElem>;
  edu_condition_id: XmlElem<string | null, DnEduConditionCatalogDocumentTopElem>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.student_states>;
  main_group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
  educat_groups: XmlMultiElem<DnStudentDocumentEducatGroup | null>;
  stud_dt_id: XmlElem<string | null, typeof common.stud_doc_types>;
  educat_institution: XmlElem<string | null>;
  doc_series: XmlElem<string | null>;
  doc_number: XmlElem<string | null>;
  doc_year: XmlElem<string | null>;
  is_excellent: XmlElem<boolean>;
  lng_id: XmlElem<string | null>;
  location_id: XmlElem<string | null, typeof lists.locations>;
  web_design_id: XmlElem<string | null>;
  pict_url: XmlElem<string | null>;
  web_enter_date: XmlElem<Date | null>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  scient_adviser_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  dn_student_fullname(): string;
};

type DnStudentDocument = XmlDocument & {
  TopElem: DnStudentDocumentTopElem;
  dn_student: DnStudentDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
