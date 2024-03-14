type KnowledgeAcquaintCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  level_id: XmlElem<string>;
  level_index: XmlElem<number>;
  level_name: XmlElem<string>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  state_id: XmlElem<string, typeof common.knowledge_acquaint_states>;
  type_id: XmlElem<string, typeof common.knowledge_acquaint_types>;
  confirmation_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  confirmation_type: XmlElem<string, typeof common.acquaint_confirmation_types>;
  confirmation_expert_type: XmlElem<string, typeof common.confirmation_expert_types>;
  confirmation_boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  project_participant_id: XmlElem<number, ProjectParticipantCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
