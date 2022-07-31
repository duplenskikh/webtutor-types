interface RemoteSecurityProfileDocumentMethodAccessList {
  access_block_id: XmlElem<string>;
  library_profile: XmlElem<string>;
}

interface RemoteSecurityProfileDocumentLibAccessList {
  library_id: XmlElem<number>;
  library_code: XmlElem<string>;
  filter: XmlElem<string>;
}

type RemoteSecurityProfileDocumentTopElem = XmlTopElem & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  source: XmlElem<number>;
  method_access_list: XmlMultiElem<RemoteSecurityProfileDocumentMethodAccessList>;
  lib_access_list: XmlMultiElem<RemoteSecurityProfileDocumentLibAccessList>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type RemoteSecurityProfileDocument = XmlDocument & {
  TopElem: RemoteSecurityProfileDocumentTopElem;
}
