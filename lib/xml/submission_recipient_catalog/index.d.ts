type SubmissionRecipientCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  submission_type_id: XmlElem<number | null, SubmissionCatalogDocumentTopElem>;
  submission_type_name: XmlElem<string | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
