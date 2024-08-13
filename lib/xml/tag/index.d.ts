interface TagDocumentExpert {
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
}

type TagDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: TagDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  require_acknowledgement: XmlElem<boolean>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  experts: XmlMultiElem<TagDocumentExpert | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type TagDocument = XmlDocument & {
  TopElem: TagDocumentTopElem;
  tag: TagDocumentTopElem;
  DocDesc(): string;
};
