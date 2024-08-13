interface EventAssessmentPlanDocumentCompetenceExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
  mark: XmlElem<string | null>;
}

interface EventAssessmentPlanDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  mark: XmlElem<string | null>;
  weight: XmlElem<number>;
}

interface EventAssessmentPlanDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  mark: XmlElem<string | null>;
  weight: XmlElem<number>;
  exercises: XmlMultiElem<EventAssessmentPlanDocumentCompetenceExercise | null>;
  indicators: XmlMultiElem<EventAssessmentPlanDocumentCompetenceIndicator | null>;
}

type EventAssessmentPlanDocumentTopElem = XmlTopElem &
MsPersonSdBase &
SupplementaryQuestionsBase &
CustomElemsBase & {
  Doc: EventAssessmentPlanDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  date_start: XmlElem<Date | null>;
  assessment_type: XmlElem<string | null>;
  assessment_type_id: XmlElem<string>;
  status: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  is_done: XmlElem<boolean>;
  competences: XmlMultiElem<EventAssessmentPlanDocumentCompetence | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  temp: XmlElem<string | null>;
  file_name: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
};

type EventAssessmentPlanDocument = XmlDocument & {
  TopElem: EventAssessmentPlanDocumentTopElem;
  event_assessment_plan: EventAssessmentPlanDocumentTopElem;
  DocDesc(): string;
};
