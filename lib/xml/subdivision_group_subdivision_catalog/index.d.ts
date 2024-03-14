type SubdivisionGroupSubdivisionCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_dynamic: XmlElem<boolean>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
