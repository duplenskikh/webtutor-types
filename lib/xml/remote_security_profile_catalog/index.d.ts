type RemoteSecurityProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): unknown;
};
