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
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  type: XmlElem<number, typeof common.indicator_types>;
  comment: XmlElem<string | null>;
  positive_comment: XmlElem<string | null>;
  negative_comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type IndicatorDocument = XmlDocument & {
  TopElem: IndicatorDocumentTopElem;
  indicator: IndicatorDocumentTopElem;
  DocDesc(): string;
};
