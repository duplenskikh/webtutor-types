interface DimensionTopElem extends XmlTopElem<DimensionDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DimensionDocument = XmlDocument<DimensionTopElem>;
