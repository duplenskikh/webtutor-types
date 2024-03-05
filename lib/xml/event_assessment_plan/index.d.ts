interface EventAssessmentPlanDocumentCompetenceExercise {
  exercise_id: XmlElem<number, ExerciseCatalogDocumentTopElem>;
  mark: XmlElem<string>;
}

interface EventAssessmentPlanDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  mark: XmlElem<string>;
  weight: XmlElem<number>;
}

interface EventAssessmentPlanDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  mark: XmlElem<string>;
  weight: XmlElem<number>;
  exercises: XmlMultiElem<EventAssessmentPlanDocumentCompetenceExercise>;
  indicators: XmlMultiElem<EventAssessmentPlanDocumentCompetenceIndicator>;
}

type EventAssessmentPlanDocumentTopElem = XmlTopElem &
MsPersonSdBase &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: EventAssessmentPlanDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & XmlElem<MsPersonSdInnerBase>;
  date_start: XmlElem<Date>;
  assessment_type: XmlElem<string>;
  assessment_type_id: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  is_done: XmlElem<boolean>;
  competences: XmlMultiElem<EventAssessmentPlanDocumentCompetence>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  temp: XmlElem<string>;
  file_name: XmlElem<string>;
  file_url: XmlElem<string>;
  event_result_type_id: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
};

type EventAssessmentPlanDocument = XmlDocument & {
  TopElem: EventAssessmentPlanDocumentTopElem;
};
