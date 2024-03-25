interface ContestDocumentResponsible extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface ContestDocumentJudge extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  main: XmlElem<boolean>;
}

interface ContestDocumentParticipant {
  participant_id: XmlElem<number, ParticipantCatalogDocumentTopElem>;
}

type ContestDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContestDocument;
  name: XmlElem<string>;
  code: XmlElem<string>;
  is_open: XmlElem<boolean>;
  show_works: XmlElem<boolean>;
  status_id: XmlElem<string, typeof common.contest_states>;
  show_marks: XmlElem<boolean>;
  web_template_id: XmlElem<string, typeof common.contest_web_templates>;
  estimation_id: XmlElem<string, typeof common.contest_types>;
  online_vote: XmlElem<boolean>;
  show_rating: XmlElem<boolean>;
  show_results: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  responsibles: XmlMultiElem<ContestDocumentResponsible>;
  judges: XmlMultiElem<ContestDocumentJudge>;
  participants: XmlMultiElem<ContestDocumentParticipant>;
  mark_min: XmlElem<number>;
  mark_max: XmlElem<number>;
  combo: XmlElem<boolean>;
  file_num: XmlElem<number>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  add_participant(personId: number, participantTopElem: unknown): undefined | void;
  calculate_rating(): void;
};

type ContestDocument = XmlDocument & {
  TopElem: ContestDocumentTopElem;
  contest: ContestDocumentTopElem;
  DocDesc(): string;
};
