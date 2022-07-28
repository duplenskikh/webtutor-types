type PolicyTypeDocumentTopElem = XmlTopElem & { Doc: PolicyTypeDocument } & 
  FileListBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  provider?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PolicyTypeDocument = XmlDocument & { TopElem: PolicyTypeDocumentTopElem; };
