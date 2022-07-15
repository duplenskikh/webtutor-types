interface ParticipantMark extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  value?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface ParticipantView extends DescBase {
}

interface ParticipantTopElem extends XmlTopElem<ParticipantDocument>, PersonFillingBase, FileListBase, AdminAccessBase {
  contest_id?: XmlElem<number>;
  contest_name?: XmlElem<string>;
  work_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  desc?: XmlElem<string>;
  general_mark?: XmlElem<string>;
  rating?: XmlElem<number>;
  place?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  marks?: XmlMultiElem<ParticipantMark>;
  view?: XmlElem<ParticipantView>;
}

type ParticipantDocument = XmlDocument<ParticipantTopElem>;
