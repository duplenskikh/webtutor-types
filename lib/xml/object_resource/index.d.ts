interface ObjectResourceView extends DescBase {
}

interface ObjectResourceTopElem extends XmlTopElem<ObjectResourceDocument>, ObjectCodeNameBase, AdminAccessBase, CustomElemsBase {
  type?: XmlElem<string>;
  state_id?: XmlElem<string>;
  count?: XmlElem<number>;
  place_id?: XmlElem<number>;
  small_desc?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ObjectResourceView>;
}

type ObjectResourceDocument = XmlDocument<ObjectResourceTopElem>;
