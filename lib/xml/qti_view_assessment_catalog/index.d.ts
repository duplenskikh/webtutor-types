type QtiViewAssessmentCatalogDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  OnInit(): void;
};
