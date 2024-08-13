type CareerTreeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  current_position_name: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
  person_fullname: XmlElem<string | null>;
  position_collaborator_fullname: XmlElem<string | null>;
  OnBuildExt(): void;
  MatchDocTypeExt(): void;
  OnDeleteExt(): void;
};
