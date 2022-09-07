interface ProjectParticipantDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
}

interface ProjectParticipantDocumentCustomField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface ProjectParticipantDocumentCurrentKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  current_level_id: XmlElem<string>;
  comment: XmlElem<string>;
}

type ProjectParticipantDocumentTopElem = XmlTopElem & { Doc: ProjectParticipantDocument } & 
PersonFillingBase &
FileListBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  code: XmlElem<string>;
  person_id: XmlElem<number>;
  catalog: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number>;
  project_id: XmlElem<number>;
  participant_roles_id: XmlMultiElem<number>;
  status_id: XmlElem<string>;
  workflow_matchings: XmlMultiElem<ProjectParticipantDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  custom_fields: XmlMultiElem<ProjectParticipantDocumentCustomField>;
  current_knowledge_parts: XmlMultiElem<ProjectParticipantDocumentCurrentKnowledgePart>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_load: XmlElem<number>;
  percent_plan_load: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type ProjectParticipantDocument = XmlDocument & {
  TopElem: ProjectParticipantDocumentTopElem;
};
