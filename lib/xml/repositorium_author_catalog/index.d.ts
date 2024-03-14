type RepositoriumAuthorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  repositorium_id: XmlElem<number, RepositoriumCatalogDocumentTopElem>;
  repositorium_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
