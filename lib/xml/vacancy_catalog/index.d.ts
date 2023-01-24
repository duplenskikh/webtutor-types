type VacancyCatalogDocumentTopElem = XmlTopElem & { Doc: VacancyCatalogDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
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
  min_age: XmlElem<number>;
  max_age: XmlElem<number>;
  min_wage: XmlElem<number>;
  max_wage: XmlElem<number>;
  avg_wage: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  min_budget: XmlElem<number>;
  max_budget: XmlElem<number>;
  budget_currency_type_id: XmlElem<string>;
  position_common_id: XmlElem<number>;
  subordination: XmlElem<string>;
  pub_date: XmlElem<Date>;
  edit_date: XmlElem<Date>;
  pub_period: XmlElem<number>;
  close_date: XmlElem<Date>;
  is_closed: XmlElem<boolean>;
  collaborator_id: XmlElem<number>;
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  sub_id: XmlElem<number>;
  sub_name: XmlElem<string>;
  recruiter_id: XmlElem<number>;
  site_id: XmlElem<number>;
  url: XmlElem<string>;
  comment: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VacancyCatalogDocument = XmlDocument & { TopElem: VacancyCatalogDocumentTopElem; };
