type EducationProgramCatalogDocumentTopElem = XmlTopElem & { Doc: EducationProgramCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  education_methods_id: XmlMultiElem<number>;
}

type EducationProgramCatalogDocument = XmlDocument & { TopElem: EducationProgramCatalogDocumentTopElem; };
