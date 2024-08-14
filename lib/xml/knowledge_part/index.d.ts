interface KnowledgePartDocumentLevel extends MsConfirmationBase {
  id: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  expertise_level: XmlElem<boolean>;
  confirmation_type: XmlElem<string, typeof common.confirmation_types>;
}

type KnowledgePartDocumentTopElem = XmlTopElem &
MsConfirmationBase &
CatalogListBase &
FileListBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: KnowledgePartDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Родительское значение */
  parent_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  /** Классификатор */
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  confirmation_type: XmlElem<string, typeof common.confirmation_types>;
  /** Описание */
  text_area: XmlElem<string | null>;
  /** Требует подтверждения эксперта */
  require_acknowledgement: XmlElem<boolean>;
  /** Уровни */
  levels: XmlMultiElem<KnowledgePartDocumentLevel | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  knowledge_part_type_id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
};

type KnowledgePartDocument = XmlDocument & {
  TopElem: KnowledgePartDocumentTopElem;
  knowledge_part: KnowledgePartDocumentTopElem;
  DocDesc(): string;
};
