type ResumeCatalogDocumentTopElem = XmlTopElem & { Doc: ResumeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  sex: XmlElem<string>;
  email: XmlElem<string>;
  family_status: XmlElem<string>;
  birth_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision: XmlElem<string>;
  person_position: XmlElem<string>;
  creator_person_id: XmlElem<number>;
  creator_person_fullname: XmlElem<string>;
  forbid_portal_delete: XmlElem<boolean>;
  filling_type: XmlElem<string>;
  min_wage: XmlElem<number>;
  max_wage: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  profession_id: XmlElem<number>;
  profession_area_id: XmlElem<string>;
  profession_area: XmlElem<string>;
  region_id: XmlElem<number>;
  employment_type_id: XmlElem<string>;
  schedule_work_id: XmlElem<string>;
  schedule_id: XmlElem<number>;
  vacancy_source_id: XmlElem<number>;
  exp_years: XmlElem<number>;
  willingness_travel_type_id: XmlElem<string>;
  is_willing_relocate: XmlElem<boolean>;
  main_educ_type_id: XmlElem<string>;
  education: XmlElem<string>;
  is_archive: XmlElem<boolean>;
  is_candidate: XmlElem<boolean>;
  lng_id: XmlMultiElem<string>;
  educ_type_id: XmlMultiElem<string>;
  education_type_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ResumeCatalogDocument = XmlDocument & { TopElem: ResumeCatalogDocumentTopElem; };
