interface RemoteSecurityProfileDocumentMethodAccess {
  access_block_id: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  library_profile: XmlElem<string | null>;
}

interface RemoteSecurityProfileDocumentLibAccess {
  library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  library_code: XmlElem<string | null>;
  filter: XmlElem<string | null>;
}

type RemoteSecurityProfileDocumentTopElem = XmlTopElem & {
  Doc: RemoteSecurityProfileDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  source: XmlElem<number>;
  method_access_list: XmlMultiElem<RemoteSecurityProfileDocumentMethodAccess | null>;
  lib_access_list: XmlMultiElem<RemoteSecurityProfileDocumentLibAccess | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RemoteSecurityProfileDocument = XmlDocument & {
  TopElem: RemoteSecurityProfileDocumentTopElem;
  remote_security_profile: RemoteSecurityProfileDocumentTopElem;
  DocDesc(): string;
};
