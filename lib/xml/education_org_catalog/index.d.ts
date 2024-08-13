type EducationOrgCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  disp_name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  contact_main: XmlElem<string | null>;
  telephone_work: XmlElem<string | null>;
  telephone_mobile: XmlElem<string | null>;
  fax: XmlElem<string | null>;
  email: XmlElem<string | null>;
  is_provider_courses: XmlElem<boolean>;
  provider_course_type_id: XmlElem<number | null, ProviderCourseTypeCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
