type ExternalSystemCatalogDocumentTopElem = XmlTopElem & { Doc: ExternalSystemCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  anonymous_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ExternalSystemCatalogDocument = XmlDocument & { TopElem: ExternalSystemCatalogDocumentTopElem; };
