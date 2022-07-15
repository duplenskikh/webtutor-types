interface ProjectParticipantWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
}

interface ProjectParticipantCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface ProjectParticipantCurrentKnowledgePart {
  knowledge_part_id?: XmlElem<number>;
  current_level_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface ProjectParticipantViewCurrentKnowledgePartLevel {
  title?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface ProjectParticipantViewCurrentKnowledgePart {
  knowledge_part_id?: XmlElem<number>;
  knowledge_part_name?: XmlElem<string>;
  levels?: XmlMultiElem<ProjectParticipantViewCurrentKnowledgePartLevel>;
}

interface ProjectParticipantView extends DescBase {
  workflow_state?: XmlElem<string>;
  workflow_action_result?: XmlElem<any>;
  workflow_create_break?: XmlElem<boolean>;
  current_knowledge_parts?: XmlMultiElem<ProjectParticipantViewCurrentKnowledgePart>;
}

interface ProjectParticipantTopElem extends XmlTopElem<ProjectParticipantDocument>, PersonFillingBase, FileListBase, WorkflowDataBase, AdminAccessBase, CustomElemsBase, KnowledgePartsBase {
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  catalog?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  boss_type_id?: XmlElem<number>;
  project_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  workflow_matching_type?: XmlElem<string>;
  is_excluded?: XmlElem<boolean>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_load?: XmlElem<number>;
  percent_plan_load?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  participant_roles_id?: XmlMultiElem<number>;
  workflow_matchings?: XmlMultiElem<ProjectParticipantWorkflowMatching>;
  custom_fields?: XmlMultiElem<ProjectParticipantCustomField>;
  current_knowledge_parts?: XmlMultiElem<ProjectParticipantCurrentKnowledgePart>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ProjectParticipantView>;
}

type ProjectParticipantDocument = XmlDocument<ProjectParticipantTopElem>;
