type SubmissionRecipientCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  submission_type_id: XmlElem<number, SubmissionCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
