interface AssessmentAppraiseMatrixDocumentTimeTableCondition {
  field?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
}

interface AssessmentAppraiseMatrixDocumentTimeTableSchedule {
  start_time?: XmlElem<Date>;
  end_time?: XmlElem<Date>;
}
interface AssessmentAppraiseMatrixDocumentTimeTable {
  conditions?: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTableCondition>;
  schedules?: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTableSchedule>;
}

interface AssessmentAppraiseMatrixDocumentPeriod {
  period_id?: XmlElem<string>;
  start_time?: XmlElem<Date>;
  end_time?: XmlElem<Date>;
  name?: XmlElem<string>;
}

type AssessmentAppraiseMatrixDocumentTopElem = XmlTopElem & { Doc: AssessmentAppraiseMatrixDocument } & 
FieldNamesBase &
AdminAccessBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_name?: XmlElem<string>;
  time_tables?: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTable>;
  periods?: XmlMultiElem<AssessmentAppraiseMatrixDocumentPeriod>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}

type AssessmentAppraiseMatrixDocument = XmlDocument & { TopElem: AssessmentAppraiseMatrixDocumentTopElem; };
