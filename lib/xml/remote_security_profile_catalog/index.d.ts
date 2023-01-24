type RemoteSecurityProfileCatalogDocumentTopElem = XmlTopElem & { Doc: RemoteSecurityProfileCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
}

type RemoteSecurityProfileCatalogDocument = XmlDocument & { TopElem: RemoteSecurityProfileCatalogDocumentTopElem; };
