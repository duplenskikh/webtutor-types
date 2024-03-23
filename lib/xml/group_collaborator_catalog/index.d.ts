type GroupCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  forum_id: XmlElem<number, ForumCatalogDocumentTopElem>;
  tutor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  tutor_fullname: XmlElem<string>;
  is_dynamic: XmlElem<boolean>;
  is_hidden: XmlElem<boolean>;
  allow_social_post: XmlElem<boolean>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
