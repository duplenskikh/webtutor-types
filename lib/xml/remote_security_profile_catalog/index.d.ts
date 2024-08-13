type RemoteSecurityProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
