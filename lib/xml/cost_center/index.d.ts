interface CostCenterDocumentSubdivision {
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
}

type CostCenterDocumentTopElem = XmlTopElem &
FuncManagersBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CostCenterDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  subdivisions: XmlMultiElem<CostCenterDocumentSubdivision>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CostCenterDocument = XmlDocument & {
  TopElem: CostCenterDocumentTopElem;
};
