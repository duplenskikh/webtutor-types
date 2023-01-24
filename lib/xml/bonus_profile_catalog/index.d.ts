type BonusProfileCatalogDocumentTopElem = XmlTopElem & { Doc: BonusProfileCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BonusProfileCatalogDocument = XmlDocument & { TopElem: BonusProfileCatalogDocumentTopElem; };
