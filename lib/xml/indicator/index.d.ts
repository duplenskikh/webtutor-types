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
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  type: XmlElem<number, typeof common.indicator_types>;
  comment: XmlElem<string>;
  positive_comment: XmlElem<string>;
  negative_comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type IndicatorDocument = XmlDocument & {
  TopElem: IndicatorDocumentTopElem;
  indicator: IndicatorDocumentTopElem;
  DocDesc(): unknown;
};
