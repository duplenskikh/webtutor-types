interface VacancyDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
  assessment_code: XmlElem<string | null>;
}

type VacancyDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: VacancyDocument;
  source_id: XmlElem<string | null>;
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  schedule_work_id: XmlElem<string | null, typeof common.employment_kinds>;
  schedule_id: XmlElem<number | null, WorkScheduleCatalogDocumentTopElem>;
  educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  employment_type_id: XmlElem<string | null, typeof common.employment_types>;
  work_condition_id: XmlElem<number | null, WorkConditionCatalogDocumentTopElem>;
  work_mode_id: XmlElem<number | null, WorkModeCatalogDocumentTopElem>;
  wage_system_id: XmlElem<number | null, WageSystemCatalogDocumentTopElem>;
  material_liability_id: XmlElem<number | null, MaterialLiabilityCatalogDocumentTopElem>;
  vacancy_reason_id: XmlElem<number | null, VacancyReasonCatalogDocumentTopElem>;
  work_experience_id: XmlElem<number | null, WorkExperienceCatalogDocumentTopElem>;
  min_exp_years: XmlElem<number | null>;
  min_age: XmlElem<number | null>;
  max_age: XmlElem<number | null>;
  min_wage: XmlElem<number | null>;
  max_wage: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_budget: XmlElem<number | null>;
  max_budget: XmlElem<number | null>;
  budget_currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  subordination: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  pub_date: XmlElem<Date | null>;
  edit_date: XmlElem<Date | null>;
  pub_period: XmlElem<number | null>;
  close_date: XmlElem<Date | null>;
  is_closed: XmlElem<boolean | null>;
  contact_fullname: XmlElem<string | null>;
  contact_phone: XmlElem<string | null>;
  contact_email: XmlElem<string | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string | null>;
  sub_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  sub_name: XmlElem<string | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  recruiter_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  assessments: XmlMultiElem<VacancyDocumentAssessment | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  url: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type VacancyDocument = XmlDocument & {
  TopElem: VacancyDocumentTopElem;
  vacancy: VacancyDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
