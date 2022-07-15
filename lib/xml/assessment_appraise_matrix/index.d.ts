interface AssessmentAppraiseMatrixTimeTableCondition {
  field?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
}

interface AssessmentAppraiseMatrixTimeTableScheduleTarget {
  stage?: XmlElem<number>;
  period_id?: XmlElem<string>;
}

interface AssessmentAppraiseMatrixTimeTableSchedule {
  start_time?: XmlElem<Date>;
  end_time?: XmlElem<Date>;
  target?: XmlElem<AssessmentAppraiseMatrixTimeTableScheduleTarget>;
}

interface AssessmentAppraiseMatrixTimeTable {
  conditions?: XmlMultiElem<AssessmentAppraiseMatrixTimeTableCondition>;
  schedules?: XmlMultiElem<AssessmentAppraiseMatrixTimeTableSchedule>;
}

interface AssessmentAppraiseMatrixPeriod {
  period_id?: XmlElem<string>;
  start_time?: XmlElem<Date>;
  end_time?: XmlElem<Date>;
  name?: XmlElem<string>;
}

interface AssessmentAppraiseMatrixView extends DescBase {
  selector?: XmlElem<string>;
}

interface AssessmentAppraiseMatrixTopElem extends XmlTopElem<AssessmentAppraiseMatrixDocument>, FieldNamesBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  time_tables?: XmlMultiElem<AssessmentAppraiseMatrixTimeTable>;
  periods?: XmlMultiElem<AssessmentAppraiseMatrixPeriod>;
  view?: XmlElem<AssessmentAppraiseMatrixView>;
}

type AssessmentAppraiseMatrixDocument = XmlDocument<AssessmentAppraiseMatrixTopElem>;
