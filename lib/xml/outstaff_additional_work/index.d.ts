interface OutstaffAdditionalWorkTopElem extends XmlTopElem<OutstaffAdditionalWorkDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type OutstaffAdditionalWorkDocument = XmlDocument<OutstaffAdditionalWorkTopElem>;
