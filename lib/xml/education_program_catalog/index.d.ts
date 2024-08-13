type EducationProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  education_methods_id: XmlMultiElemObject<number | null, EducationMethodCatalogDocumentTopElem>;
  OnBuild(): void;
};
