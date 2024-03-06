interface ScaleDocumentScaleElement {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  min: XmlElem<number>;
  max: XmlElem<number>;
  result: XmlElem<number>;
  desc: XmlElem<string>;
  desc_required: XmlElem<boolean>;
}

type ScaleDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ScaleDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  max_limit: XmlElem<number>;
  min_limit: XmlElem<number>;
  status: XmlElem<string, typeof common.kpi_states>;
  scale_elements: XmlMultiElem<ScaleDocumentScaleElement>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  checked(iValue: number): unknown;
};

type ScaleDocument = XmlDocument & {
  TopElem: ScaleDocumentTopElem;
  scale: ScaleDocumentTopElem;

};
