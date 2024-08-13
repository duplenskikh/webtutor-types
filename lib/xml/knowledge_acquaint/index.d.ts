type KnowledgeAcquaintDocumentTopElem = XmlTopElem &
PersonFillingBase &
MsConfirmationBase &
FileListBase & {
  Doc: KnowledgeAcquaintDocument;
  code: XmlElem<string | null>;
  knowledge_part_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_part_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  level_id: XmlElem<string | null>;
  level_index: XmlElem<number | null>;
  level_name: XmlElem<string | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.knowledge_acquaint_states>;
  type_id: XmlElem<string | null, typeof common.knowledge_acquaint_types>;
  confirmation_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  confirmation_type: XmlElem<string, typeof common.acquaint_confirmation_types>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  desc: XmlElem<string | null>;
};

type KnowledgeAcquaintDocument = XmlDocument & {
  TopElem: KnowledgeAcquaintDocumentTopElem;
  knowledge_acquaint: KnowledgeAcquaintDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
