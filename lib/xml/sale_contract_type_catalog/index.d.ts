type SaleContractTypeCatalogDocumentTopElem = XmlTopElem & { Doc: SaleContractTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SaleContractTypeCatalogDocument = XmlDocument & { TopElem: SaleContractTypeCatalogDocumentTopElem; };
