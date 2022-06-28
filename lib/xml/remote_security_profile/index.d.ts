interface IWTRemoteSecurityProfileTopElem {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  method_access_list?: XmlMultiElem<IWTRemoteSecutiryProfileMethodAccess>
}

type IWTRemoteSecurityProfileDocument = IWTXmlDocument<IWTRemoteSecurityProfileTopElem>;
