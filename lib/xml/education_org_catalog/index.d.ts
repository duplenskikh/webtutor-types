type EducationOrgCatalogDocumentTopElem = XmlTopElem & { Doc: EducationOrgCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  resource_id: XmlElem<number>;
  contact_main: XmlElem<string>;
  telephone_work: XmlElem<string>;
  telephone_mobile: XmlElem<string>;
  fax: XmlElem<string>;
  email: XmlElem<string>;
  is_provider_courses: XmlElem<boolean>;
  provider_course_type_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EducationOrgCatalogDocument = XmlDocument & { TopElem: EducationOrgCatalogDocumentTopElem; };
