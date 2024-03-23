type EducationProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  education_methods_id: XmlMultiElemObject<number, EducationMethodCatalogDocumentTopElem>;
  OnBuild(): void;
};
