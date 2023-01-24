type WalkthroughCatalogDocumentTopElem = XmlTopElem & { Doc: WalkthroughCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  external_system_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type WalkthroughCatalogDocument = XmlDocument & { TopElem: WalkthroughCatalogDocumentTopElem; };
