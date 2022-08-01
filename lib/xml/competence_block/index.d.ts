type CompetenceBlockDocumentTopElem = XmlTopElem & { Doc: CompetenceBlockDocument } & 
AdminAccessBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type CompetenceBlockDocument = XmlDocument & { TopElem: CompetenceBlockDocumentTopElem; };
