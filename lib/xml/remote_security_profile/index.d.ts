interface RemoteSecurityProfileDocumentMethodAccessListMethodAccess {
  access_block_id: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  library_profile: XmlElem<string>;
}

interface RemoteSecurityProfileDocumentMethodAccessList {
  method_access: XmlElem<RemoteSecurityProfileDocumentMethodAccessListMethodAccess>;
}

interface RemoteSecurityProfileDocumentLibAccessListLibAccess {
  library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  library_code: XmlElem<string>;
  filter: XmlElem<string>;
}

interface RemoteSecurityProfileDocumentLibAccessList {
  lib_access: XmlElem<RemoteSecurityProfileDocumentLibAccessListLibAccess>;
}

type RemoteSecurityProfileDocumentTopElem = XmlTopElem & {
  Doc: RemoteSecurityProfileDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  source: XmlElem<number>;
  method_access_list: XmlElem<RemoteSecurityProfileDocumentMethodAccessList>;
  lib_access_list: XmlElem<RemoteSecurityProfileDocumentLibAccessList>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
};

type RemoteSecurityProfileDocument = XmlDocument & {
  TopElem: RemoteSecurityProfileDocumentTopElem;
};
