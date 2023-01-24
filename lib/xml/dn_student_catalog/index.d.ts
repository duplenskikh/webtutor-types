type DnStudentCatalogDocumentTopElem = XmlTopElem & { Doc: DnStudentCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  email: XmlElem<string>;
  phone: XmlElem<string>;
  region: XmlElem<string>;
  adress_fact_live: XmlElem<string>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  educat_form_id: XmlElem<string>;
  edu_condition_id: XmlElem<string>;
  qualification_id: XmlElem<number>;
  status_id: XmlElem<string>;
  main_group_id: XmlElem<number>;
  educat_groups: XmlElem<string>;
  stud_dt_id: XmlElem<string>;
  educat_institution: XmlElem<string>;
  is_excellent: XmlElem<boolean>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  scient_adviser_id: XmlElem<number>;
  subject: XmlElem<string>;
  file_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnStudentCatalogDocument = XmlDocument & { TopElem: DnStudentCatalogDocumentTopElem; };
