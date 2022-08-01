interface CostCenterDocumentSubdivision {
  subdivision_id?: XmlElem<number>;
}

type CostCenterDocumentTopElem = XmlTopElem & { Doc: CostCenterDocument } & 
FuncManagersBase &
AdminAccessBase &
CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_active?: XmlElem<boolean>;
  parent_id?: XmlElem<number>;
  subdivisions?: XmlMultiElem<CostCenterDocumentSubdivision>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type CostCenterDocument = XmlDocument & { TopElem: CostCenterDocumentTopElem; };
