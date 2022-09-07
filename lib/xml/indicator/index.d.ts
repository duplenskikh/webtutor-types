type IndicatorDocumentTopElem = XmlTopElem & { Doc: IndicatorDocument } & 
ObjectCodeNameBase &
CompetenceScaleBase &
CompetenceLevelBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  competence_id: XmlElem<number>;
  type: XmlElem<number>;
  comment: XmlElem<string>;
  positive_comment: XmlElem<string>;
  negative_comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type IndicatorDocument = XmlDocument & { TopElem: IndicatorDocumentTopElem; };
