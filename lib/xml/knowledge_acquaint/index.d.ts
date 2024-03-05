type KnowledgeAcquaintDocumentTopElem = XmlTopElem &
PersonFillingBase &
MsConfirmationBase &
FileListBase & {
  Doc: KnowledgeAcquaintDocument;
  code: XmlElem<string>;
  knowledge_part_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  level_id: XmlElem<string>;
  level_index: XmlElem<number>;
  level_name: XmlElem<string>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  state_id: XmlElem<string, typeof common.knowledge_acquaint_states>;
  type_id: XmlElem<string, typeof common.knowledge_acquaint_types>;
  confirmation_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  confirmation_type: XmlElem<string, typeof common.acquaint_confirmation_types>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
};

type KnowledgeAcquaintDocument = XmlDocument & {
  TopElem: KnowledgeAcquaintDocumentTopElem;
};
