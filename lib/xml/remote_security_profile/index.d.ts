interface RemoteSecurityProfileDocumentMethodAccess {
  access_block_id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  library_profile: XmlElem<string>;
}

interface RemoteSecurityProfileDocumentLibAccess {
  library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  library_code: XmlElem<string>;
  filter: XmlElem<string>;
}

type RemoteSecurityProfileDocumentTopElem = XmlTopElem & {
  Doc: RemoteSecurityProfileDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  source: XmlElem<number>;
  method_access_list: XmlMultiElem<RemoteSecurityProfileDocumentMethodAccess>;
  lib_access_list: XmlMultiElem<RemoteSecurityProfileDocumentLibAccess>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
};

type RemoteSecurityProfileDocument = XmlDocument & {
  TopElem: RemoteSecurityProfileDocumentTopElem;
  remote_security_profile: RemoteSecurityProfileDocumentTopElem;
  DocDesc(): string;
};
