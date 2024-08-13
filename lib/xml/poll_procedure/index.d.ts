interface PollProcedureDocumentAuditoryPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentAuditory {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_name: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
  poll_groups: XmlMultiElem<PollProcedureDocumentAuditoryPollGroup | null>;
  responsible_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  responsible_person_fullname: XmlElem<string | null>;
}

interface PollProcedureDocumentSubdivisionPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  confirmation: XmlElem<boolean>;
  max_auditory: XmlElem<number | null>;
  poll_groups: XmlMultiElem<PollProcedureDocumentSubdivisionPollGroup | null>;
}

interface PollProcedureDocumentGroupPollGroup {
  id: XmlElem<string | null>;
}

interface PollProcedureDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  group_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  max_auditory: XmlElem<number | null>;
  poll_groups: XmlMultiElem<PollProcedureDocumentGroupPollGroup | null>;
}

interface PollProcedureDocumentPoll {
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupPoll {
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
}

interface PollProcedureDocumentAdditionalPollGroupCondition {
  id: XmlElem<string | null>;
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  question_id: XmlElem<number | null>;
  entry_id: XmlElem<number | null>;
  and_or: XmlElem<string>;
}

interface PollProcedureDocumentAdditionalPollGroup {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  polls: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupPoll | null>;
  conditions: XmlMultiElem<PollProcedureDocumentAdditionalPollGroupCondition | null>;
}

interface PollProcedureDocumentAdditional {
  poll_groups: XmlMultiElem<PollProcedureDocumentAdditionalPollGroup | null>;
  reject_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  return_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  assigned_from_web_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  confirmation_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  responsibles_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  completion_template_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  show_after_completion: XmlElem<boolean>;
  server_agent_id: XmlElem<number | null, ServerAgentCatalogDocumentTopElem>;
  custom_post_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_poll_generation: XmlElem<string | null>;
  mini_workflow_code: XmlElem<string | null>;
}

type PollProcedureDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollProcedureDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_model: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  auditorys: XmlMultiElem<PollProcedureDocumentAuditory | null>;
  subdivisions: XmlMultiElem<PollProcedureDocumentSubdivision | null>;
  groups: XmlMultiElem<PollProcedureDocumentGroup | null>;
  polls: XmlMultiElem<PollProcedureDocumentPoll | null>;
  web_display: XmlElem<boolean>;
  status: XmlElem<number>;
  additional: XmlElem<PollProcedureDocumentAdditional | null>;
  periodity: XmlElem<MsPeriodityBase | null>;
  complete_message: XmlElem<string | null>;
  adaptive(): unknown;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  set_poll_id(fldCondition: unknown): unknown;
  set_question_id(fldCondition: unknown, fldItem: unknown): unknown;
  update_poll_questionare(): unknown;
  get_person_poll_objs(curUserId: number): unknown;
  is_launch_person(curUserId: number): unknown;
  role_id: XmlMultiElemObject<number | null>;
  equal_hash: XmlElem<string | null>;
};

type PollProcedureDocument = XmlDocument & {
  TopElem: PollProcedureDocumentTopElem;
  poll_procedure: PollProcedureDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
