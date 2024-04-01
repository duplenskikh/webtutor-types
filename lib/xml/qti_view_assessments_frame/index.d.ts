interface QtiViewAssessmentsFrameDocumentViewAssessmentFrameSection {
  id: XmlElem<number>;
  hier_expanded: XmlElem<boolean>;
}

interface QtiViewAssessmentsFrameDocumentViewAssessmentFrame {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  sections: XmlMultiElem<QtiViewAssessmentsFrameDocumentViewAssessmentFrameSection>;
}

type QtiViewAssessmentsFrameDocumentTopElem = XmlTopElem & {
  Doc: QtiViewAssessmentsFrameDocument;

};

type QtiViewAssessmentsFrameDocument = XmlDocument & {
  TopElem: QtiViewAssessmentsFrameDocumentTopElem;
  qti_view_assessments_frame: QtiViewAssessmentsFrameDocumentTopElem;
  view_assessment_frame: XmlElem<QtiViewAssessmentsFrameDocumentViewAssessmentFrame>;
};
