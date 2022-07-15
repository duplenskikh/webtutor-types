interface RegionTopElem extends XmlTopElem<RegionDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RegionDocument = XmlDocument<RegionTopElem>;
