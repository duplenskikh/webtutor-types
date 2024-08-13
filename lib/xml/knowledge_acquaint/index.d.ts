type KnowledgeAcquaintDocumentTopElem = XmlTopElem &
PersonFillingBase &
MsConfirmationBase &
FileListBase & {
  Doc: KnowledgeAcquaintDocument;
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
  confirmation_type: XmlElem<string, typeof common.acquaint_confirmation_types>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
};

type KnowledgeAcquaintDocument = XmlDocument & {
  TopElem: KnowledgeAcquaintDocumentTopElem;
  knowledge_acquaint: KnowledgeAcquaintDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
