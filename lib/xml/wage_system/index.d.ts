interface WageSystemTopElem extends XmlTopElem<WageSystemDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type WageSystemDocument = XmlDocument<WageSystemTopElem>;
