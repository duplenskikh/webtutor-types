interface DnStudentDocumentEducatGroup {
  edu_group_id: XmlElem<number>;
}

type DnStudentDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
InsertFileBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStudentDocument;
  code: XmlElem<string>;
  type: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  mod_name: XmlElem<PersonNameBase>;
  region: XmlElem<string>;
  adress_fact_live: XmlElem<string>;
  need_conduct: XmlElem<boolean>;
  is_conduct: XmlElem<boolean>;
  is_benefits: XmlElem<boolean>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  educat_form_id: XmlElem<string>;
  edu_condition_id: XmlElem<string>;
  qualification_id: XmlElem<number>;
  status_id: XmlElem<string>;
  main_group_id: XmlElem<number>;
  educat_groups: XmlMultiElem<DnStudentDocumentEducatGroup>;
  stud_dt_id: XmlElem<string>;
  educat_institution: XmlElem<string>;
  doc_series: XmlElem<string>;
  doc_number: XmlElem<string>;
  doc_year: XmlElem<string>;
  is_excellent: XmlElem<boolean>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string>;
  web_design_id: XmlElem<string>;
  pict_url: XmlElem<string>;
  web_enter_date: XmlElem<Date>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  scient_adviser_id: XmlElem<number>;
  subject: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  dn_student_fullname(): string;
};

type DnStudentDocument = XmlDocument & {
  TopElem: DnStudentDocumentTopElem;
};
