interface PollProcedureDocumentAuditoryPollGroup {
  id: XmlElem<string>;
}
interface PollProcedureDocumentAuditory {
  person_id: XmlElem<number>;
  person_name: XmlElem<string>;
  position_name: XmlElem<string>;
  poll_groups: XmlMultiElem<PollProcedureDocumentAuditoryPollGroup>;
  responsible_person_id: XmlElem<number>;
  responsible_person_fullname: XmlElem<string>;
}

interface PollProcedureDocumentSubdivisionPollGroup {
  id: XmlElem<string>;
}
interface PollProcedureDocumentSubdivision {
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  confirmation: XmlElem<boolean>;
  max_auditory: XmlElem<number>;
  poll_groups: XmlMultiElem<PollProcedureDocumentSubdivisionPollGroup>;
}

interface PollProcedureDocumentGroupPollGroup {
  id: XmlElem<string>;
}
interface PollProcedureDocumentGroup {
  group_id: XmlElem<number>;
  group_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  max_auditory: XmlElem<number>;
  poll_groups: XmlMultiElem<PollProcedureDocumentGroupPollGroup>;
}

interface PollProcedureDocumentPoll {
  poll_id: XmlElem<number>;
}

type PollProcedureDocumentTopElem = XmlTopElem & { Doc: PollProcedureDocument } & 
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  is_model: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  auditorys: XmlMultiElem<PollProcedureDocumentAuditory>;
  subdivisions: XmlMultiElem<PollProcedureDocumentSubdivision>;
  groups: XmlMultiElem<PollProcedureDocumentGroup>;
  polls: XmlMultiElem<PollProcedureDocumentPoll>;
  web_display: XmlElem<boolean>;
  status: XmlElem<number>;
  complete_message: XmlElem<string>;
  adaptive(): unknown;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_poll_id(): unknown;
  set_question_id(): unknown;
  update_poll_questionare(): unknown;
  get_person_poll_objs(): unknown;
  is_launch_person(): unknown;
  role_id: XmlMultiElem<number>;
}

type PollProcedureDocument = XmlDocument & {
  TopElem: PollProcedureDocumentTopElem;
};
