interface KpiGroupView {
  selector?: XmlElem<string>;
}

interface KpiGroupTopElem extends XmlTopElem<KpiGroupDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  view?: XmlElem<KpiGroupView>;
}

type KpiGroupDocument = XmlDocument<KpiGroupTopElem>;
