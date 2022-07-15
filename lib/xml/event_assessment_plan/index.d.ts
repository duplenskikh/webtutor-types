interface EventAssessmentPlanCompetenceExercise {
  exercise_id?: XmlElem<number>;
  mark?: XmlElem<string>;
}

interface EventAssessmentPlanCompetenceIndicator extends WorkflowFieldsAssessmentBase {
  indicator_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  mark?: XmlElem<string>;
  weight?: XmlElem<number>;
}

interface EventAssessmentPlanCompetence extends WorkflowFieldsAssessmentBase {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  mark?: XmlElem<string>;
  weight?: XmlElem<number>;
  exercises?: XmlMultiElem<EventAssessmentPlanCompetenceExercise>;
  indicators?: XmlMultiElem<EventAssessmentPlanCompetenceIndicator>;
}

interface EventAssessmentPlanViewScale {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  percent?: XmlElem<number>;
}

interface EventAssessmentPlanView {
  selector?: XmlElem<string>;
  temp_id?: XmlElem<number>;
  flag_mark?: XmlElem<boolean>;
  scales?: XmlMultiElem<EventAssessmentPlanViewScale>;
}

interface EventAssessmentPlanTopElem extends XmlTopElem<EventAssessmentPlanDocument>, SupplementaryQuestionsBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  event_id?: XmlElem<number>;
  expert_person_id?: XmlElem<number>;
  date_start?: XmlElem<Date>;
  assessment_type?: XmlElem<string>;
  assessment_type_id?: XmlElem<string>;
  status?: XmlElem<string>;
  is_done?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  temp?: XmlElem<string>;
  file_name?: XmlElem<string>;
  file_url?: XmlElem<string>;
  event_result_type_id?: XmlElem<number>;
  competences?: XmlMultiElem<EventAssessmentPlanCompetence>;
  view?: XmlElem<EventAssessmentPlanView>;
}

type EventAssessmentPlanDocument = XmlDocument<EventAssessmentPlanTopElem>;
