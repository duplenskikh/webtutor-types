interface TagDocumentExpert {
  expert_id: XmlElem<number>;
}

type TagDocumentTopElem = XmlTopElem & { Doc: TagDocument } & 
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  require_acknowledgement: XmlElem<boolean>;
  knowledge_part_id: XmlElem<number>;
  experts: XmlMultiElem<TagDocumentExpert>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type TagDocument = XmlDocument & { TopElem: TagDocumentTopElem; };
