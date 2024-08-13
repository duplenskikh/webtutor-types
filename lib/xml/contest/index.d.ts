interface ContestDocumentResponsible extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ContestDocumentJudge extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  main: XmlElem<boolean>;
}

interface ContestDocumentParticipant {
  participant_id: XmlElem<number | null, ParticipantCatalogDocumentTopElem>;
}

type ContestDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: ContestDocument;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  is_open: XmlElem<boolean>;
  show_works: XmlElem<boolean>;
  status_id: XmlElem<string | null, typeof common.contest_states>;
  show_marks: XmlElem<boolean>;
  web_template_id: XmlElem<string | null, typeof common.contest_web_templates>;
  estimation_id: XmlElem<string | null, typeof common.contest_types>;
  online_vote: XmlElem<boolean>;
  show_rating: XmlElem<boolean>;
  show_results: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  responsibles: XmlMultiElem<ContestDocumentResponsible | null>;
  judges: XmlMultiElem<ContestDocumentJudge | null>;
  participants: XmlMultiElem<ContestDocumentParticipant | null>;
  mark_min: XmlElem<number>;
  mark_max: XmlElem<number>;
  combo: XmlElem<boolean>;
  file_num: XmlElem<number>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  add_participant(personId: number, participantTopElem: unknown): undefined | void;
  calculate_rating(): void;
};

type ContestDocument = XmlDocument & {
  TopElem: ContestDocumentTopElem;
  contest: ContestDocumentTopElem;
  DocDesc(): string;
};
