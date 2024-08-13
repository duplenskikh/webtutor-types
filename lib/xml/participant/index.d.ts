interface ParticipantDocumentMark extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  value: XmlElem<string | null>;
  desc: XmlElem<string | null>;
}

type ParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase & {
  Doc: ParticipantDocument;
  contest_id: XmlElem<number | null, ContestCatalogDocumentTopElem>;
  contest_name: XmlElem<string | null>;
  work_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.participant_states>;
  desc: XmlElem<string | null>;
  general_mark: XmlElem<string | null>;
  marks: XmlMultiElem<ParticipantDocumentMark | null>;
  rating: XmlElem<number | null>;
  place: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ParticipantDocument = XmlDocument & {
  TopElem: ParticipantDocumentTopElem;
  participant: ParticipantDocumentTopElem;
  DocDesc(): string;
};
