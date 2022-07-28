type RemoteSecurityProfileDocumentTopElem = XmlTopElem & { Doc: RemoteSecurityProfileDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  source?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RemoteSecurityProfileDocument = XmlDocument & { TopElem: RemoteSecurityProfileDocumentTopElem; };
