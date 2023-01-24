type ProjectTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ProjectTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProjectTypeCatalogDocument = XmlDocument & { TopElem: ProjectTypeCatalogDocumentTopElem; };
