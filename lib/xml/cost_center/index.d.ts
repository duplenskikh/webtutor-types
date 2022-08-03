interface CostCenterDocumentSubdivision {
  subdivision_id: XmlElem<number>;
}

type CostCenterDocumentTopElem = XmlTopElem &
FuncManagersBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CostCenterDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number>;
  subdivisions: XmlMultiElem<CostCenterDocumentSubdivision>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type CostCenterDocument = XmlDocument & {
  TopElem: CostCenterDocumentTopElem;
};
