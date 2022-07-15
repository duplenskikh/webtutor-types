interface CostCenterSubdivision {
  subdivision_id?: XmlElem<number>;
}

interface CostCenterTopElem extends XmlTopElem<CostCenterDocument>, FuncManagersBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_active?: XmlElem<boolean>;
  parent_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  subdivisions?: XmlMultiElem<CostCenterSubdivision>;
}

type CostCenterDocument = XmlDocument<CostCenterTopElem>;
