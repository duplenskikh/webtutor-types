type CourseCatalogDocumentTopElem = XmlTopElem & { Doc: CourseCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  status: XmlElem<string>;
  price: XmlElem<number>;
  mastery_score: XmlElem<number>;
  max_score: XmlElem<number>;
  yourself_start: XmlElem<boolean>;
  duration: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  person_id: XmlElem<number>;
  cl_course_id: XmlElem<number>;
  education_org_id: XmlElem<number>;
  base_url: XmlElem<string>;
  default_response_type_id: XmlElem<number>;
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
}

type CourseCatalogDocument = XmlDocument & { TopElem: CourseCatalogDocumentTopElem; };
