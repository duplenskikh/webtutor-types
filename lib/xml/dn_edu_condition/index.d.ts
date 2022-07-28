type DnEduConditionDocumentTopElem = XmlTopElem & { Doc: DnEduConditionDocument } & 
  AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnEduConditionDocument = XmlDocument & { TopElem: DnEduConditionDocumentTopElem; };
