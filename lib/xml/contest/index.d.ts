interface ContestResponsible extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
}

interface ContestJudge extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  main?: XmlElem<boolean>;
}

interface ContestParticipant {
  participant_id?: XmlElem<number>;
}

interface ContestView extends DescBase {
}

interface ContestTopElem extends XmlTopElem<ContestDocument>, AdminAccessBase, CustomElemsBase {
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  is_open?: XmlElem<boolean>;
  show_works?: XmlElem<boolean>;
  status_id?: XmlElem<string>;
  show_marks?: XmlElem<boolean>;
  web_template_id?: XmlElem<string>;
  estimation_id?: XmlElem<string>;
  online_vote?: XmlElem<boolean>;
  show_rating?: XmlElem<boolean>;
  show_results?: XmlElem<boolean>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  mark_min?: XmlElem<number>;
  mark_max?: XmlElem<number>;
  combo?: XmlElem<boolean>;
  file_num?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  responsibles?: XmlMultiElem<ContestResponsible>;
  judges?: XmlMultiElem<ContestJudge>;
  participants?: XmlMultiElem<ContestParticipant>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ContestView>;
  add_participant?(): any;
  calculate_rating?(): any;
}

type ContestDocument = XmlDocument<ContestTopElem>;
