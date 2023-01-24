type SalaryPaymentTypeCatalogDocumentTopElem = XmlTopElem & { Doc: SalaryPaymentTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type SalaryPaymentTypeCatalogDocument = XmlDocument & { TopElem: SalaryPaymentTypeCatalogDocumentTopElem; };
