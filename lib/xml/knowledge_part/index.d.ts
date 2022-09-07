interface KnowledgePartDocumentLevel {
  id: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  expertise_level: XmlElem<boolean>;
  confirmation_type: XmlElem<string>;
}

type KnowledgePartDocumentTopElem = XmlTopElem & { Doc: KnowledgePartDocument } & 
CatalogListBase &
FileListBase &
CustomElemsBase &
KnowledgePartsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  knowledge_classifier_id: XmlElem<number>;
  confirmation_type: XmlElem<string>;
  text_area: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
  levels: XmlMultiElem<KnowledgePartDocumentLevel>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  knowledge_part_type_id: XmlElem<number>;
}

type KnowledgePartDocument = XmlDocument & {
  TopElem: KnowledgePartDocumentTopElem;
};
