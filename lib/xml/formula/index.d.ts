interface FormulaDocumentDependencieObjectVar {
  key: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface FormulaDocumentDependencie {
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null>;
  object_name: XmlElem<string | null>;
  object_vars: XmlMultiElem<FormulaDocumentDependencieObjectVar | null>;
}

interface FormulaDocumentFormulaElementCustomElem {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface FormulaDocumentFormulaElement {
  id: XmlElem<string | null>;
  type: XmlElem<string>;
  type_value: XmlElem<string>;
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  kpi_type: XmlElem<string>;
  kpi_type_value: XmlElem<string | null>;
  value: XmlElem<string>;
  desc: XmlElem<string | null>;
  begin_bracket: XmlElem<string | null>;
  finish_bracket: XmlElem<string | null>;
  calculation_operator: XmlElem<string | null>;
  custom_elems: XmlMultiElem<FormulaDocumentFormulaElementCustomElem | null>;
}

type FormulaDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: FormulaDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  formula_code: XmlElem<string | null>;
  type: XmlElem<string | null>;
  status: XmlElem<string | null>;
  dependencies: XmlMultiElem<FormulaDocumentDependencie | null>;
  formula_elements: XmlMultiElem<FormulaDocumentFormulaElement | null>;
  formula_eval_str: XmlElem<string | null>;
  desc_str: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type FormulaDocument = XmlDocument & {
  TopElem: FormulaDocumentTopElem;
  formula: FormulaDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
