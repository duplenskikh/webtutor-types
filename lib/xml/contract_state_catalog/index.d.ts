type ContractStateCatalogDocumentTopElem = XmlTopElem & { Doc: ContractStateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type ContractStateCatalogDocument = XmlDocument & { TopElem: ContractStateCatalogDocumentTopElem; };
