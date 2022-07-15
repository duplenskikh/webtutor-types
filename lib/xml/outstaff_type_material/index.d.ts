interface OutstaffTypeMaterialTopElem extends XmlTopElem<OutstaffTypeMaterialDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type OutstaffTypeMaterialDocument = XmlDocument<OutstaffTypeMaterialTopElem>;
