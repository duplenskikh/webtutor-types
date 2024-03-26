interface ParticipantDocumentMark extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  value: XmlElem<string>;
  desc: XmlElem<string>;
}

type ParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase & {
  Doc: ParticipantDocument;
  contest_id: XmlElem<number, ContestCatalogDocumentTopElem>;
  contest_name: XmlElem<string>;
  work_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.participant_states>;
  desc: XmlElem<string>;
  general_mark: XmlElem<string>;
  marks: XmlMultiElem<ParticipantDocumentMark>;
  rating: XmlElem<number>;
  place: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type ParticipantDocument = XmlDocument & {
  TopElem: ParticipantDocumentTopElem;
  participant: ParticipantDocumentTopElem;
  DocDesc(): string;
};
