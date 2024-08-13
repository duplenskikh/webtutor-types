interface CostCenterDocumentSubdivision {
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
}

type CostCenterDocumentTopElem = XmlTopElem &
FuncManagersBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CostCenterDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  subdivisions: XmlMultiElem<CostCenterDocumentSubdivision | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CostCenterDocument = XmlDocument & {
  TopElem: CostCenterDocumentTopElem;
  cost_center: CostCenterDocumentTopElem;
  DocDesc(): string;
};
