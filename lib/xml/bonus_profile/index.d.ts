interface BonusProfileView {
  selector?: XmlElem<string>;
}

interface BonusProfileTopElem extends XmlTopElem<BonusProfileDocument>, WebVariablesBase, CustomElemsBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  script?: XmlElem<string>;
  url?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<BonusProfileView>;
  evaluate_pa?(): any;
}

type BonusProfileDocument = XmlDocument<BonusProfileTopElem>;
