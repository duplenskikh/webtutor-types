interface PollProcedureDocumentAuditoryPollGroup {
  id: XmlElem<string>;
}

interface PollProcedureDocumentAuditory {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_name: XmlElem<string>;
  position_name: XmlElem<string>;
  poll_groups: XmlMultiElem<PollProcedureDocumentAuditoryPollGroup>;
  responsible_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  responsible_person_fullname: XmlElem<string>;
}

interface PollProcedureDocumentSubdivisionPollGroup {
  id: XmlElem<string>;
}

interface PollProcedureDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  confirmation: XmlElem<boolean>;
  max_auditory: XmlElem<number>;
  poll_groups: XmlMultiElem<PollProcedureDocumentSubdivisionPollGroup>;
}

interface PollProcedureDocumentGroupPollGroup {
  id: XmlElem<string>;
}

interface PollProcedureDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  group_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  max_auditory: XmlElem<number>;
  poll_groups: XmlMultiElem<PollProcedureDocumentGroupPollGroup>;
}

interface PollProcedureDocumentPoll {
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupPoll {
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupCondition {
  id: XmlElem<string>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  question_id: XmlElem<number>;
  entry_id: XmlElem<number>;
  and_or: XmlElem<string>;
}

interface PollProcedureDocumentAdditionalPollGroup {
  id: XmlElem<string>;
  name: XmlElem<string>;
  polls: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupPoll>;
  conditions: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupCondition>;
}

interface PollProcedureDocumentAdditional {
  poll_groups: XmlMultiElem<PollProcedureDocumentAdditionalPollGroup>;
  reject_web_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  return_web_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  assigned_from_web_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  confirmation_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  responsibles_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  completion_template_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  show_after_completion: XmlElem<boolean>;
  server_agent_id: XmlElem<number, ServerAgentCatalogDocumentTopElem>;
  custom_post_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_poll_generation: XmlElem<string>;
  mini_workflow_code: XmlElem<string>;
}

type PollProcedureDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollProcedureDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_model: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  auditorys: XmlMultiElem<PollProcedureDocumentAuditory>;
  subdivisions: XmlMultiElem<PollProcedureDocumentSubdivision>;
  groups: XmlMultiElem<PollProcedureDocumentGroup>;
  polls: XmlMultiElem<PollProcedureDocumentPoll>;
  web_display: XmlElem<boolean>;
  status: XmlElem<number>;
  additional: XmlElem<PollProcedureDocumentAdditional>;
  periodity: XmlElem<MsPeriodityBase>;
  complete_message: XmlElem<string>;
  adaptive(): unknown;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_poll_id(fldCondition: unknown): unknown;
  set_question_id(fldCondition: unknown, fldItem: unknown): unknown;
  update_poll_questionare(): unknown;
  get_person_poll_objs(curUserId: number): unknown;
  is_launch_person(curUserId: number): unknown;
  role_id: XmlMultiElemObject<number>;
  equal_hash: XmlElem<string>;
};

type PollProcedureDocument = XmlDocument & {
  TopElem: PollProcedureDocumentTopElem;
  poll_procedure: PollProcedureDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
