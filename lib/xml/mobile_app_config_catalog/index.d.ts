type MobileAppConfigCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  use_chat: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
