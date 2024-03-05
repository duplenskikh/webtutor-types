type MobileAppConfigCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  use_chat: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  OnBuild(): unknown;
};
