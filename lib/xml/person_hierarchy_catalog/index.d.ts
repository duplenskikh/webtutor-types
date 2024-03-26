type PersonHierarchyCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  parent_sub_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_id: XmlMultiElemObject<number, SubdivisionCatalogDocumentTopElem>;
  ready: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
