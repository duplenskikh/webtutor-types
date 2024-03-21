interface TagDocumentExpert {
  expert_id: XmlElem<number, ExpertCatalogDocumentTopElem>;
}

type TagDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: TagDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  require_acknowledgement: XmlElem<boolean>;
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  experts: XmlMultiElem<TagDocumentExpert>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type TagDocument = XmlDocument & {
  TopElem: TagDocumentTopElem;
  tag: TagDocumentTopElem;
  DocDesc(): unknown;
};
