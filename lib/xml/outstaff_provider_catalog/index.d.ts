type OutstaffProviderCatalogDocumentTopElem = XmlTopElem & { Doc: OutstaffProviderCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  region_id: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type OutstaffProviderCatalogDocument = XmlDocument & { TopElem: OutstaffProviderCatalogDocumentTopElem; };
