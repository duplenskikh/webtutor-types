interface ResumeDocumentSkill {
  id: XmlElem<string | null>;
  skill_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  skill_parent_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  skill_name: XmlElem<string | null>;
  skill_id_with_levels: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  level_id: XmlElem<string | null>;
  level_name: XmlElem<string | null>;
}

interface ResumeDocumentWorkExperience {
  id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  org_name: XmlElem<string | null>;
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  org_phone: XmlElem<string | null>;
  org_fax: XmlElem<string | null>;
  org_email: XmlElem<string | null>;
  org_address: XmlElem<string | null>;
  org_site: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface ResumeDocumentEducation {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.expended_educ_types>;
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  form: XmlElem<number | null, EducationFormCatalogDocumentTopElem>;
  mode: XmlElem<number | null, EducationModeCatalogDocumentTopElem>;
  date: XmlElem<number | null>;
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  professional_area_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  specialisation: XmlElem<string | null>;
  result: XmlElem<string | null>;
  site: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface ResumeDocumentProject {
  id: XmlElem<string | null>;
  sphere: XmlElem<string | null>;
  type: XmlElem<string | null>;
  examination_year: XmlElem<number | null>;
  year: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface ResumeDocumentPublication {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  publisher: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  link: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface ResumeDocumentLng {
  id: XmlElem<string | null>;
  lng_id: XmlElem<string | null, typeof common.languages>;
  level: XmlElem<number | null, typeof common.language_levels>;
}

type ResumeDocumentTopElem = XmlTopElem &
MsPersonSdBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ResumeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_candidate: XmlElem<boolean>;
  creator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  forbid_portal_delete: XmlElem<boolean>;
  filling_type: XmlElem<string>;
  sex: XmlElem<string | null>;
  family_status: XmlElem<string | null>;
  birth_date: XmlElem<Date | null>;
  academic_degree: XmlElem<string | null>;
  academic_heading: XmlElem<string | null>;
  location_id: XmlElem<string | null>;
  address: XmlElem<string | null>;
  region: XmlElem<string | null>;
  city: XmlElem<string | null>;
  phone: XmlElem<string | null>;
  work_phone: XmlElem<string | null>;
  mobile_phone: XmlElem<string | null>;
  min_wage: XmlElem<number | null>;
  max_wage: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  email: XmlElem<string | null>;
  inet_uid: XmlElem<string | null>;
  profession_area_id: XmlElem<string | null, typeof lists.professional_areas>;
  profession_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  professional_area_type_id: XmlElem<string | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  employment_type_id: XmlElem<string | null, typeof common.employment_types>;
  schedule_work_id: XmlElem<string | null, typeof common.employment_kinds>;
  schedule_id: XmlElem<number | null, WorkScheduleCatalogDocumentTopElem>;
  vacancy_source_id: XmlElem<number | null, VacancySourceCatalogDocumentTopElem>;
  exp_years: XmlElem<number | null>;
  willingness_travel_type_id: XmlElem<string | null, typeof common.willingness_travel_types>;
  is_willing_relocate: XmlElem<boolean>;
  relocate_name: XmlElem<string | null>;
  children_num: XmlElem<number | null>;
  educ_type_id: XmlElem<string | null, typeof common.educ_types>;
  education_type_id: XmlElem<number | null, EducationTypeCatalogDocumentTopElem>;
  skills: XmlMultiElem<ResumeDocumentSkill | null>;
  is_archive: XmlElem<boolean>;
  work_experiences: XmlMultiElem<ResumeDocumentWorkExperience | null>;
  educations: XmlMultiElem<ResumeDocumentEducation | null>;
  projects: XmlMultiElem<ResumeDocumentProject | null>;
  publications: XmlMultiElem<ResumeDocumentPublication | null>;
  citizenship: XmlElem<string | null>;
  main_lng: XmlElem<string | null, typeof common.languages>;
  lngs: XmlMultiElem<ResumeDocumentLng | null>;
  dominant_skills: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  html_resume: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ResumeDocument = XmlDocument & {
  TopElem: ResumeDocumentTopElem;
  resume: ResumeDocumentTopElem;
  OnLocalInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
