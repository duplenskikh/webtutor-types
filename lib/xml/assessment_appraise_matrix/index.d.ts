interface AssessmentAppraiseMatrixDocumentTimeTableCondition {
  field: XmlElem<string | null>;
  value: XmlElem<string | null>;
  type: XmlElem<string | null>;
  option_type: XmlElem<string, typeof common.all_option_types>;
  is_custom_field: XmlElem<boolean>;
}

interface AssessmentAppraiseMatrixDocumentTimeTableScheduleTarget {
  stage: XmlElem<number | null, typeof common.assessment_stages>;
  period_id: XmlElem<string | null>;
}

interface AssessmentAppraiseMatrixDocumentTimeTableSchedule {
  start_time: XmlElem<Date | null>;
  end_time: XmlElem<Date | null>;
  target: XmlElem<AssessmentAppraiseMatrixDocumentTimeTableScheduleTarget | null>;
}

interface AssessmentAppraiseMatrixDocumentTimeTable {
  conditions: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTableCondition | null>;
  schedules: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTableSchedule | null>;
}

interface AssessmentAppraiseMatrixDocumentPeriod {
  period_id: XmlElem<string | null>;
  start_time: XmlElem<Date | null>;
  end_time: XmlElem<Date | null>;
  name: XmlElem<string | null>;
}

type AssessmentAppraiseMatrixDocumentTopElem = XmlTopElem &
FieldNamesBase &
AdminAccessBase & {
  Doc: AssessmentAppraiseMatrixDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Объект */
  object_name: XmlElem<string>;
  /** Расписание */
  time_tables: XmlMultiElem<AssessmentAppraiseMatrixDocumentTimeTable | null>;
  /** Периоды */
  periods: XmlMultiElem<AssessmentAppraiseMatrixDocumentPeriod | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type AssessmentAppraiseMatrixDocument = XmlDocument & {
  TopElem: AssessmentAppraiseMatrixDocumentTopElem;
  assessment_appraise_matrix: AssessmentAppraiseMatrixDocumentTopElem;
  DocDesc(): string;
};
