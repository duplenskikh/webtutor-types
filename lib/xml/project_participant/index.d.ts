interface ProjectParticipantDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ProjectParticipantDocumentCustomField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface ProjectParticipantDocumentCurrentKnowledgePart {
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  current_level_id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type ProjectParticipantDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
WorkflowDataBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: ProjectParticipantDocument;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_roles_id: XmlMultiElemObject<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  workflow_matchings: XmlMultiElem<ProjectParticipantDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<ProjectParticipantDocumentCustomField | null>;
  current_knowledge_parts: XmlMultiElem<ProjectParticipantDocumentCurrentKnowledgePart | null>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_load: XmlElem<number | null>;
  percent_plan_load: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type ProjectParticipantDocument = XmlDocument & {
  TopElem: ProjectParticipantDocumentTopElem;
  project_participant: ProjectParticipantDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
