interface ProjectParticipantDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface ProjectParticipantDocumentCustomField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface ProjectParticipantDocumentCurrentKnowledgePart {
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  current_level_id: XmlElem<string>;
  comment: XmlElem<string>;
}

type ProjectParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantDocument;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number, ProjectParticipantRoleCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.agreement_status_types>;
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
};

type ProjectParticipantDocument = XmlDocument & {
  TopElem: ProjectParticipantDocumentTopElem;
  project_participant: ProjectParticipantDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
