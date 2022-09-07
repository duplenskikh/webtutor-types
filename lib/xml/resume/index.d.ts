interface ResumeDocumentSkill {
  id: XmlElem<string>;
  skill_id: XmlElem<number>;
  skill_parent_id: XmlElem<number>;
  skill_name: XmlElem<string>;
  skill_id_with_levels: XmlElem<number>;
  level_id: XmlElem<string>;
  level_name: XmlElem<string>;
}

interface ResumeDocumentWorkExperience {
  id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  org_name: XmlElem<string>;
  profession_area_id: XmlElem<string>;
  profession_id: XmlElem<number>;
  region_id: XmlElem<number>;
  org_phone: XmlElem<string>;
  org_fax: XmlElem<string>;
  org_email: XmlElem<string>;
  org_address: XmlElem<string>;
  org_site: XmlElem<string>;
  position_name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
}

interface ResumeDocumentEducation {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  education_type_id: XmlElem<string>;
  form: XmlElem<number>;
  mode: XmlElem<number>;
  date: XmlElem<number>;
  professional_area_type_id: XmlElem<number>;
  professional_area_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  specialisation: XmlElem<string>;
  result: XmlElem<string>;
  site: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
}

interface ResumeDocumentProject {
  id: XmlElem<string>;
  sphere: XmlElem<string>;
  type: XmlElem<string>;
  examination_year: XmlElem<number>;
  year: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
}

interface ResumeDocumentPublication {
  id: XmlElem<string>;
  name: XmlElem<string>;
  publisher: XmlElem<string>;
  date: XmlElem<Date>;
  link: XmlElem<string>;
  comment: XmlElem<string>;
}

interface ResumeDocumentLng {
  id: XmlElem<string>;
  lng_id: XmlElem<string>;
  level: XmlElem<number>;
}

type ResumeDocumentTopElem = XmlTopElem & { Doc: ResumeDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  is_candidate: XmlElem<boolean>;
  creator_person_id: XmlElem<number>;
  forbid_portal_delete: XmlElem<boolean>;
  filling_type: XmlElem<string>;
  sex: XmlElem<string>;
  family_status: XmlElem<string>;
  birth_date: XmlElem<Date>;
  academic_degree: XmlElem<string>;
  academic_heading: XmlElem<string>;
  location_id: XmlElem<string>;
  address: XmlElem<string>;
  region: XmlElem<string>;
  city: XmlElem<string>;
  phone: XmlElem<string>;
  work_phone: XmlElem<string>;
  mobile_phone: XmlElem<string>;
  min_wage: XmlElem<number>;
  max_wage: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  email: XmlElem<string>;
  inet_uid: XmlElem<string>;
  profession_area_id: XmlElem<string>;
  profession_id: XmlElem<number>;
  professional_area_type_id: XmlElem<string>;
  region_id: XmlElem<number>;
  employment_type_id: XmlElem<string>;
  schedule_work_id: XmlElem<string>;
  schedule_id: XmlElem<number>;
  vacancy_source_id: XmlElem<number>;
  exp_years: XmlElem<number>;
  willingness_travel_type_id: XmlElem<string>;
  is_willing_relocate: XmlElem<boolean>;
  relocate_name: XmlElem<string>;
  children_num: XmlElem<number>;
  educ_type_id: XmlElem<string>;
  education_type_id: XmlElem<number>;
  skills: XmlMultiElem<ResumeDocumentSkill>;
  is_archive: XmlElem<boolean>;
  work_experiences: XmlMultiElem<ResumeDocumentWorkExperience>;
  educations: XmlMultiElem<ResumeDocumentEducation>;
  projects: XmlMultiElem<ResumeDocumentProject>;
  publications: XmlMultiElem<ResumeDocumentPublication>;
  citizenship: XmlElem<string>;
  main_lng: XmlElem<string>;
  lngs: XmlMultiElem<ResumeDocumentLng>;
  dominant_skills: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  html_resume: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ResumeDocument = XmlDocument & {
  TopElem: ResumeDocumentTopElem;
};
