type KnowledgeAcquaintCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  level_id: XmlElem<string | null>;
  level_index: XmlElem<number | null>;
  level_name: XmlElem<string | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.knowledge_acquaint_states>;
  type_id: XmlElem<string | null, typeof common.knowledge_acquaint_types>;
  confirmation_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  confirmation_type: XmlElem<string | null, typeof common.acquaint_confirmation_types>;
  confirmation_expert_type: XmlElem<string | null, typeof common.confirmation_expert_types>;
  confirmation_boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  project_participant_id: XmlElem<number | null, ProjectParticipantCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
