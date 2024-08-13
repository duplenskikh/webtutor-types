type SiteOwnerObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
