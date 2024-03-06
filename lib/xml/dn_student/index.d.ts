interface DnStudentDocumentEducatGroup {
  edu_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
}

type DnStudentDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
InsertFileBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudentDocument;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.stud_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  mod_name: XmlElem<PersonNameBase>;
  region: XmlElem<string>;
  adress_fact_live: XmlElem<string>;
  need_conduct: XmlElem<boolean>;
  is_conduct: XmlElem<boolean>;
  is_benefits: XmlElem<boolean>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<string, DnEducatFormCatalogDocumentTopElem>;
  edu_condition_id: XmlElem<string, DnEduConditionCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.student_states>;
  main_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  educat_groups: XmlMultiElem<DnStudentDocumentEducatGroup>;
  stud_dt_id: XmlElem<string, typeof common.stud_doc_types>;
  educat_institution: XmlElem<string>;
  doc_series: XmlElem<string>;
  doc_number: XmlElem<string>;
  doc_year: XmlElem<string>;
  is_excellent: XmlElem<boolean>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string, typeof lists.locations>;
  web_design_id: XmlElem<string>;
  pict_url: XmlElem<string>;
  web_enter_date: XmlElem<Date>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  scient_adviser_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  subject: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  dn_student_fullname(): unknown;
};

type DnStudentDocument = XmlDocument & {
  TopElem: DnStudentDocumentTopElem;
  dn_student: DnStudentDocumentTopElem;
  OnLocalInit(): unknown;
  DocDesc(): unknown;
};
