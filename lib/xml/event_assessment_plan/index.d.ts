interface EventAssessmentPlanDocumentCompetenceExercise {
  exercise_id?: XmlElem<number>;
  mark?: XmlElem<string>;
}

interface EventAssessmentPlanDocumentCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  mark?: XmlElem<string>;
  weight?: XmlElem<number>;
}
interface EventAssessmentPlanDocumentCompetence extends WorkflowFieldsAssessmentBase {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  mark?: XmlElem<string>;
  weight?: XmlElem<number>;
  exercises?: XmlMultiElem<EventAssessmentPlanDocumentCompetenceExercise>;
  indicators?: XmlMultiElem<EventAssessmentPlanDocumentCompetenceIndicator>;
}

type EventAssessmentPlanDocumentTopElem = XmlTopElem & { Doc: EventAssessmentPlanDocument } & 
SupplementaryQuestionsBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  event_id?: XmlElem<number>;
  expert_person_id?: XmlElem<number>;
  date_start?: XmlElem<Date>;
  assessment_type?: XmlElem<string>;
  assessment_type_id?: XmlElem<string>;
  status?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
  competences?: XmlMultiElem<EventAssessmentPlanDocumentCompetence>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  temp?: XmlElem<string>;
  file_name?: XmlElem<string>;
  file_url?: XmlElem<string>;
  event_result_type_id?: XmlElem<number>;
}

type EventAssessmentPlanDocument = XmlDocument & { TopElem: EventAssessmentPlanDocumentTopElem; };
