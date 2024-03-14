type SiteOwnerObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
