interface ParticipantDocumentMark extends PersonFillingBase {
  collaborator_id: XmlElem<number>;
  value: XmlElem<string>;
  desc: XmlElem<string>;
}

type ParticipantDocumentTopElem = XmlTopElem & { Doc: ParticipantDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase & {
  contest_id: XmlElem<number>;
  contest_name: XmlElem<string>;
  work_name: XmlElem<string>;
  person_id: XmlElem<number>;
  status_id: XmlElem<string>;
  desc: XmlElem<string>;
  general_mark: XmlElem<string>;
  marks: XmlMultiElem<ParticipantDocumentMark>;
  rating: XmlElem<number>;
  place: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type ParticipantDocument = XmlDocument & { TopElem: ParticipantDocumentTopElem; };
