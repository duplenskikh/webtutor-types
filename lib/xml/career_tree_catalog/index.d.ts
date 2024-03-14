type CareerTreeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  current_position_name: XmlElem<string>;
  position_name: XmlElem<string>;
  person_fullname: XmlElem<string>;
  position_collaborator_fullname: XmlElem<string>;
  OnBuildExt(): unknown;
  MatchDocTypeExt(): unknown;
  OnDeleteExt(): unknown;
};
