interface KnowledgePartDocumentLevel extends MsConfirmationBase {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  confirmation_type: XmlElem<string, typeof common.confirmation_types>;
  text_area: XmlElem<string | null>;
  require_acknowledgement: XmlElem<boolean>;
  levels: XmlMultiElem<KnowledgePartDocumentLevel | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  knowledge_part_type_id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
};

type KnowledgePartDocument = XmlDocument & {
  TopElem: KnowledgePartDocumentTopElem;
  knowledge_part: KnowledgePartDocumentTopElem;
  DocDesc(): string;
};
