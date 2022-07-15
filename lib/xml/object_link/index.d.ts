interface ObjectLinkLink extends ObjectTypeBase {
  id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface ObjectLinkTopElem extends XmlTopElem<ObjectLinkDocument>, ObjectTypeBase, CustomElemsBase {
  id?: XmlElem<number>;
  recommender_algorithm_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  calc_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  links?: XmlMultiElem<ObjectLinkLink>;
}

type ObjectLinkDocument = XmlDocument<ObjectLinkTopElem>;
