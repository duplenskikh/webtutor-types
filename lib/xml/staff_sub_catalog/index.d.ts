type StaffSubCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  parent_id: XmlElem<number>;
  basic_collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  basic_collaborator_fullname: XmlElem<string>;
  is_boss: XmlElem<boolean>;
  is_disbanded: XmlElem<boolean>;
  OnBuild(): unknown;
  MatchDocType(): unknown;
};
