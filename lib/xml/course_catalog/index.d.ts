type CourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  price: XmlElem<number | null>;
  mastery_score: XmlElem<number | null>;
  max_score: XmlElem<number | null>;
  yourself_start: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  base_url: XmlElem<string | null>;
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  allow_disp_response: XmlElem<boolean>;
  pwt_disp: XmlElem<boolean>;
  view_type: XmlElem<string>;
  modification_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
