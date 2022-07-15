interface RemoteSecurityProfileMethodAccessListMethodAccess {
  access_block_id?: XmlElem<string>;
  library_profile?: XmlElem<string>;
}

interface RemoteSecurityProfileMethodAccessList {
  method_access?: XmlElem<RemoteSecurityProfileMethodAccessListMethodAccess>;
}

interface RemoteSecurityProfileLibAccessListLibAccess {
  library_id?: XmlElem<number>;
  library_code?: XmlElem<string>;
  filter?: XmlElem<string>;
}

interface RemoteSecurityProfileLibAccessList {
  lib_access?: XmlElem<RemoteSecurityProfileLibAccessListLibAccess>;
}

interface RemoteSecurityProfileView {
  selector?: XmlElem<string>;
}

interface RemoteSecurityProfileTopElem extends XmlTopElem<RemoteSecurityProfileDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  source?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  method_access_list?: XmlElem<RemoteSecurityProfileMethodAccessList>;
  lib_access_list?: XmlElem<RemoteSecurityProfileLibAccessList>;
  view?: XmlElem<RemoteSecurityProfileView>;
}

type RemoteSecurityProfileDocument = XmlDocument<RemoteSecurityProfileTopElem>;
