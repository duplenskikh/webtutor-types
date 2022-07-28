type ProjectTypeDocumentTopElem = XmlTopElem & { Doc: ProjectTypeDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type ProjectTypeDocument = XmlDocument & { TopElem: ProjectTypeDocumentTopElem; };
