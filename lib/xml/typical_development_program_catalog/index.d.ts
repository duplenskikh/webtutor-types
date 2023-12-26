type TypicalDevelopmentProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: TypicalDevelopmentProgramCatalogDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  resource_id: XmlElem<number>;
  desc: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
};

type TypicalDevelopmentProgramCatalogDocument = XmlDocument & {
  TopElem: TypicalDevelopmentProgramCatalogDocumentTopElem;
};
