type BenefitCatalogDocumentTopElem = XmlTopElem & { Doc: BenefitCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  weight: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BenefitCatalogDocument = XmlDocument & { TopElem: BenefitCatalogDocumentTopElem; };
