interface PollProcedureAuditoryPollGroup {
  id?: XmlElem<string>;
}

interface PollProcedureAuditory {
  person_id?: XmlElem<number>;
  person_name?: XmlElem<string>;
  position_name?: XmlElem<string>;
  responsible_person_id?: XmlElem<number>;
  responsible_person_fullname?: XmlElem<string>;
  poll_groups?: XmlMultiElem<PollProcedureAuditoryPollGroup>;
}

interface PollProcedureSubdivisionPollGroup {
  id?: XmlElem<string>;
}

interface PollProcedureSubdivision {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  confirmation?: XmlElem<boolean>;
  max_auditory?: XmlElem<number>;
  poll_groups?: XmlMultiElem<PollProcedureSubdivisionPollGroup>;
}

interface PollProcedureGroupPollGroup {
  id?: XmlElem<string>;
}

interface PollProcedureGroup {
  group_id?: XmlElem<number>;
  group_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  max_auditory?: XmlElem<number>;
  poll_groups?: XmlMultiElem<PollProcedureGroupPollGroup>;
}

interface PollProcedurePoll {
  poll_id?: XmlElem<number>;
}

interface PollProcedureAdditionalPollGroupPoll {
  poll_id?: XmlElem<number>;
}

interface PollProcedureAdditionalPollGroupCondition {
  id?: XmlElem<string>;
  poll_id?: XmlElem<number>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}

interface PollProcedureAdditionalPollGroup {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  polls?: XmlMultiElem<PollProcedureAdditionalPollGroupPoll>;
  conditions?: XmlMultiElem<PollProcedureAdditionalPollGroupCondition>;
}

interface PollProcedureAdditional {
  reject_web_template_id?: XmlElem<number>;
  return_web_template_id?: XmlElem<number>;
  assigned_from_web_template_id?: XmlElem<number>;
  confirmation_template_id?: XmlElem<number>;
  responsibles_template_id?: XmlElem<number>;
  completion_template_id?: XmlElem<number>;
  show_after_completion?: XmlElem<boolean>;
  server_agent_id?: XmlElem<number>;
  show_tweaker?: XmlElem<boolean>;
  custom_post_web_template_id?: XmlElem<number>;
  custom_poll_generation?: XmlElem<string>;
  mini_workflow_code?: XmlElem<string>;
  poll_groups?: XmlMultiElem<PollProcedureAdditionalPollGroup>;
}

interface PollProcedurePeriodity extends MsPeriodityBase {
}

interface PollProcedureViewFilter extends AuFtFilter {
}

interface PollProcedureView extends DescBase {
  filter?: XmlElem<PollProcedureViewFilter>;
}

interface PollProcedureTopElem extends XmlTopElem<PollProcedureDocument>, CustomElemsBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  is_model?: XmlElem<boolean>;
  is_open?: XmlElem<boolean>;
  web_display?: XmlElem<boolean>;
  status?: XmlElem<number>;
  complete_message?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  periodity?: XmlElem<MsPeriodityBase>;
  role_id?: XmlMultiElem<number>;
  auditorys?: XmlMultiElem<PollProcedureAuditory>;
  subdivisions?: XmlMultiElem<PollProcedureSubdivision>;
  groups?: XmlMultiElem<PollProcedureGroup>;
  polls?: XmlMultiElem<PollProcedurePoll>;
  additional?: XmlElem<PollProcedureAdditional>;
  periodity?: XmlElem<PollProcedurePeriodity>;
  view?: XmlElem<PollProcedureView>;
  adaptive?(): any;
  set_poll_id?(): any;
  set_question_id?(): any;
  update_poll_questionare?(): any;
  get_person_poll_objs?(): any;
  is_launch_person?(): any;
}

type PollProcedureDocument = XmlDocument<PollProcedureTopElem>;
