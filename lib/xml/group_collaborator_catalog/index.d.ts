type GroupCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  tutor_fullname: XmlElem<string | null>;
  is_dynamic: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
