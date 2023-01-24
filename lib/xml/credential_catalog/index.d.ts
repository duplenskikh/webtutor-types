type CredentialCatalogDocumentTopElem = XmlTopElem & { Doc: CredentialCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CredentialCatalogDocument = XmlDocument & { TopElem: CredentialCatalogDocumentTopElem; };
