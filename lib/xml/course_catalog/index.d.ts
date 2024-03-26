type CourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  price: XmlElem<number>;
  mastery_score: XmlElem<number>;
  max_score: XmlElem<number>;
  yourself_start: XmlElem<boolean>;
  duration: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  cl_course_id: XmlElem<number, ClCourseCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  base_url: XmlElem<string>;
  default_response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  allow_disp_response: XmlElem<boolean>;
  pwt_disp: XmlElem<boolean>;
  view_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): void;
};
