type WorkConditionDocumentTopElem = XmlTopElem & { Doc: WorkConditionDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type WorkConditionDocument = XmlDocument & {
  TopElem: WorkConditionDocumentTopElem;
};
