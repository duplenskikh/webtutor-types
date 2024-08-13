type CredentialDocumentTopElem = XmlTopElem & {
  Doc: CredentialDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  remote_security_profile_id: XmlElem<number | null, RemoteSecurityProfileCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CredentialDocument = XmlDocument & {
  TopElem: CredentialDocumentTopElem;
  credential: CredentialDocumentTopElem;
  DocDesc(): string;
};
