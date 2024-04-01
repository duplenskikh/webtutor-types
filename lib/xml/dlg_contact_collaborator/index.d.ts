type DlgContactCollaboratorDocumentTopElem = XmlTopElem &
PersonBase & {
  Doc: DlgContactCollaboratorDocument;
  selected_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
};

type DlgContactCollaboratorDocument = XmlDocument & {
  TopElem: DlgContactCollaboratorDocumentTopElem;
  dlg_contact_collaborator: DlgContactCollaboratorDocumentTopElem;
  OnInit(): void;
};
