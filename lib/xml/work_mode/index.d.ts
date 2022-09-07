type WorkModeDocumentTopElem = XmlTopElem & { Doc: WorkModeDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type WorkModeDocument = XmlDocument & { TopElem: WorkModeDocumentTopElem; };
