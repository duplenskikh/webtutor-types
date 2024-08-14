type ProjectParticipantRoleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Проект */
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  participant_num: XmlElem<number | null>;
  provider_id: XmlElem<number | null, ProviderCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
