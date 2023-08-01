interface VacancyDocumentAssessment {
  assessment_id: XmlElem<number>;
  assessment_name: XmlElem<string>;
  assessment_code: XmlElem<string>;
}

type VacancyDocumentTopElem = XmlTopElem & { Doc: VacancyDocument } & 
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  source_id: XmlElem<string>;
  profession_id: XmlElem<number>;
  profession_area_id: XmlElem<string>;
  region_id: XmlElem<number>;
  schedule_work_id: XmlElem<string>;
  schedule_id: XmlElem<number>;
  educ_type_id: XmlElem<string>;
  employment_type_id: XmlElem<string>;
  work_condition_id: XmlElem<number>;
  work_mode_id: XmlElem<number>;
  wage_system_id: XmlElem<number>;
  material_liability_id: XmlElem<number>;
  vacancy_reason_id: XmlElem<number>;
  work_experience_id: XmlElem<number>;
  min_exp_years: XmlElem<number>;
  min_age: XmlElem<number>;
  max_age: XmlElem<number>;
  min_wage: XmlElem<number>;
  max_wage: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  min_budget: XmlElem<number>;
  max_budget: XmlElem<number>;
  budget_currency_type_id: XmlElem<string>;
  subordination: XmlElem<string>;
  desc: XmlElem<string>;
  pub_date: XmlElem<Date>;
  edit_date: XmlElem<Date>;
  pub_period: XmlElem<number>;
  close_date: XmlElem<Date>;
  is_closed: XmlElem<boolean>;
  contact_fullname: XmlElem<string>;
  contact_phone: XmlElem<string>;
  contact_email: XmlElem<string>;
  collaborator_id: XmlElem<number>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  sub_id: XmlElem<number>;
  sub_name: XmlElem<string>;
  position_common_id: XmlElem<number>;
  recruiter_id: XmlElem<number>;
  assessments: XmlMultiElem<VacancyDocumentAssessment>;
  site_id: XmlElem<number>;
  url: XmlElem<string>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type VacancyDocument = XmlDocument & {
  TopElem: VacancyDocumentTopElem;
};
