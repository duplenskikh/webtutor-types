interface WorkingConditionDocumentAdditionalPayment {
  id?: XmlElem<string>;
  payment_type_id?: XmlElem<number>;
  value?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface WorkingConditionDocumentBenefit {
  benefit_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

type WorkingConditionDocumentTopElem = XmlTopElem & { Doc: WorkingConditionDocument } & 
  PersonFillingBase &
  FileListBase &
  CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  is_model?: XmlElem<boolean>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  probationary_duration?: XmlElem<number>;
  position_name?: XmlElem<string>;
  place_name?: XmlElem<string>;
  place_id?: XmlElem<number>;
  working_condition_type_id?: XmlElem<number>;
  salary_payment_type_id?: XmlElem<number>;
  work_form_id?: XmlElem<number>;
  payment_remuneration?: XmlElem<string>;
  salary?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  vacation_duration?: XmlElem<number>;
  additional_payments?: XmlMultiElem<WorkingConditionDocumentAdditionalPayment>;
  benefits?: XmlMultiElem<WorkingConditionDocumentBenefit>;
  work_schedule_type_id?: XmlElem<number>;
  daily_duration?: XmlElem<number>;
  weekly_duration?: XmlElem<number>;
  start_work_type?: XmlElem<string>;
  start_work_time?: XmlElem<string>;
  end_work_time?: XmlElem<string>;
  lunch_break_duration?: XmlElem<number>;
  lunch_break_type?: XmlElem<string>;
  start_lunch_break_time?: XmlElem<string>;
  end_lunch_break_time?: XmlElem<string>;
  shifts_number?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type WorkingConditionDocument = XmlDocument & { TopElem: WorkingConditionDocumentTopElem; };
