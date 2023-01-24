type TalentPoolNominationCatalogDocumentTopElem = XmlTopElem & { Doc: TalentPoolNominationCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TalentPoolNominationCatalogDocument = XmlDocument & { TopElem: TalentPoolNominationCatalogDocumentTopElem; };
