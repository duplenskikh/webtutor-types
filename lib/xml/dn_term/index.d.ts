type DnTermDocumentTopElem = XmlTopElem & { Doc: DnTermDocument } & 
  CustomElemsBase &
  AdminAccessBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  str_term?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnTermDocument = XmlDocument & { TopElem: DnTermDocumentTopElem; };
