interface ScaleDocumentScaleElement {
  id: XmlElem<string | null>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  min: XmlElem<number>;
  max: XmlElem<number>;
  result: XmlElem<number | null>;
  desc: XmlElem<string | null>;
  desc_required: XmlElem<boolean | null>;
}

type ScaleDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ScaleDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  max_limit: XmlElem<number | null>;
  min_limit: XmlElem<number | null>;
  status: XmlElem<string | null, typeof common.kpi_states>;
  scale_elements: XmlMultiElem<ScaleDocumentScaleElement | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  checked(value: number): unknown;
};

type ScaleDocument = XmlDocument & {
  TopElem: ScaleDocumentTopElem;
  scale: ScaleDocumentTopElem;
};
