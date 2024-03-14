type RepositoriumResourceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  repositorium_id: XmlElem<number, RepositoriumCatalogDocumentTopElem>;
  repositorium_name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
