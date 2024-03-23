interface KnowledgePartDocumentLevel extends MsConfirmationBase {
  id: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
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
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  knowledge_classifier_id: XmlElem<number, KnowledgeClassifierCatalogDocumentTopElem>;
  confirmation_type: XmlElem<string, typeof common.confirmation_types>;
  text_area: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
  levels: XmlMultiElem<KnowledgePartDocumentLevel>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  knowledge_part_type_id: XmlElem<number, KnowledgePartTypeCatalogDocumentTopElem>;
};

type KnowledgePartDocument = XmlDocument & {
  TopElem: KnowledgePartDocumentTopElem;
  knowledge_part: KnowledgePartDocumentTopElem;
  DocDesc(): string;
};
