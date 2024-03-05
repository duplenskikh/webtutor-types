interface FormulaDocumentDependencieObjectVar {
  key: XmlElem<string>;
  value: XmlElem<string>;
}

interface FormulaDocumentDependencie {
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  object_vars: XmlMultiElem<FormulaDocumentDependencieObjectVar>;
}

interface FormulaDocumentFormulaElementCustomElem {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface FormulaDocumentFormulaElement {
  id: XmlElem<string>;
  type: XmlElem<string>;
  type_value: XmlElem<string>;
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  kpi_type: XmlElem<string>;
  kpi_type_value: XmlElem<string>;
  value: XmlElem<string>;
  desc: XmlElem<string>;
  begin_bracket: XmlElem<string>;
  finish_bracket: XmlElem<string>;
  calculation_operator: XmlElem<string>;
  custom_elems: XmlMultiElem<FormulaDocumentFormulaElementCustomElem>;
}

type FormulaDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: FormulaDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  formula_code: XmlElem<string>;
  type: XmlElem<string>;
  status: XmlElem<string>;
  dependencies: XmlMultiElem<FormulaDocumentDependencie>;
  formula_elements: XmlMultiElem<FormulaDocumentFormulaElement>;
  formula_eval_str: XmlElem<string>;
  desc_str: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type FormulaDocument = XmlDocument & {
  TopElem: FormulaDocumentTopElem;
};
