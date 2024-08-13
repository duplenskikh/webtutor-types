type PersonObjectProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_catalog: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
