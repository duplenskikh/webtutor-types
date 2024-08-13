type IndicatorDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CompetenceScaleBase &
CompetenceLevelBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: IndicatorDocument;
  /** Компетенция */
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Тип */
  type: XmlElem<number, typeof common.indicator_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Позитивное проявление */
  positive_comment: XmlElem<string | null>;
  /** Негативное проявление */
  negative_comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type IndicatorDocument = XmlDocument & {
  TopElem: IndicatorDocumentTopElem;
  indicator: IndicatorDocumentTopElem;
  DocDesc(): string;
};
