type PersonObjectProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_catalog: XmlMultiElemObject<string, typeof common.exchange_object_types>;
  modification_date: XmlElem<Date>;
  OnBuild(): void;
};
