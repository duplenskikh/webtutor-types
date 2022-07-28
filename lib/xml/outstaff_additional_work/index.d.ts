type OutstaffAdditionalWorkDocumentTopElem = XmlTopElem & { Doc: OutstaffAdditionalWorkDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type OutstaffAdditionalWorkDocument = XmlDocument & { TopElem: OutstaffAdditionalWorkDocumentTopElem; };
