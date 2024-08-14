type TagCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Значение карты знаний */
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Требует подтверждения эксперта */
  require_acknowledgement: XmlElem<boolean>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
