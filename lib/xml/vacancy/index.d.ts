interface VacancyDocumentAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
  assessment_code: XmlElem<string>;
}

type VacancyDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: VacancyDocument;
  source_id: XmlElem<string>;
  profession_id: XmlElem<number, ProfessionalAreaCatalogDocumentTopElem>;
  profession_area_id: XmlElem<string, typeof lists.professional_areas>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  schedule_work_id: XmlElem<string, typeof common.employment_kinds>;
  schedule_id: XmlElem<number, WorkScheduleCatalogDocumentTopElem>;
  educ_type_id: XmlElem<string, typeof common.educ_types>;
  employment_type_id: XmlElem<string, typeof common.employment_types>;
  work_condition_id: XmlElem<number, WorkConditionCatalogDocumentTopElem>;
  work_mode_id: XmlElem<number, WorkModeCatalogDocumentTopElem>;
  wage_system_id: XmlElem<number, WageSystemCatalogDocumentTopElem>;
  material_liability_id: XmlElem<number, MaterialLiabilityCatalogDocumentTopElem>;
  vacancy_reason_id: XmlElem<number, VacancyReasonCatalogDocumentTopElem>;
  work_experience_id: XmlElem<number, WorkExperienceCatalogDocumentTopElem>;
  min_exp_years: XmlElem<number>;
  min_age: XmlElem<number>;
  max_age: XmlElem<number>;
  min_wage: XmlElem<number>;
  max_wage: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  min_budget: XmlElem<number>;
  max_budget: XmlElem<number>;
  budget_currency_type_id: XmlElem<string, typeof lists.currency_types>;
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
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  sub_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  sub_name: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  recruiter_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  assessments: XmlMultiElem<VacancyDocumentAssessment>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  url: XmlElem<string>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type VacancyDocument = XmlDocument & {
  TopElem: VacancyDocumentTopElem;
  vacancy: VacancyDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
