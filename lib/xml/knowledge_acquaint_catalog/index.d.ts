type KnowledgeAcquaintCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Значение карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Значение карты знаний */
  knowledge_part_name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Уровень */
  level_id: XmlElem<string | null>;
  level_index: XmlElem<number | null>;
  /** Уровень */
  level_name: XmlElem<string | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<string | null, typeof common.knowledge_acquaint_states>;
  /** Тип */
  type_id: XmlElem<string | null, typeof common.knowledge_acquaint_types>;
  confirmation_date: XmlElem<Date | null>;
  /** Дата завершения действия */
  finish_date: XmlElem<Date | null>;
  confirmation_type: XmlElem<string | null, typeof common.acquaint_confirmation_types>;
  confirmation_expert_type: XmlElem<string | null, typeof common.confirmation_expert_types>;
  /** Тип руководителя */
  confirmation_boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  /** Участник проекта */
  project_participant_id: XmlElem<number | null, ProjectParticipantCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
