type TaggedObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  doc_create_date: XmlElem<Date>;
  require_acknowledgement: XmlElem<boolean>;
  tag_id: XmlElem<number, TagCatalogDocumentTopElem>;
  tag_name: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
