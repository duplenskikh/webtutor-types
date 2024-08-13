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
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ограничение */
  max_limit: XmlElem<number | null>;
  /** Ограничение */
  min_limit: XmlElem<number | null>;
  /** Статус */
  status: XmlElem<string | null, typeof common.kpi_states>;
  scale_elements: XmlMultiElem<ScaleDocumentScaleElement | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  checked(value: number): unknown;
};

type ScaleDocument = XmlDocument & {
  TopElem: ScaleDocumentTopElem;
  scale: ScaleDocumentTopElem;
};
