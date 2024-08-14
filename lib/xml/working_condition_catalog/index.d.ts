type WorkingConditionCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_model: XmlElem<boolean | null>;
  /** Состояние */
  state_id: XmlElem<string, typeof common.working_condition_states>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  probationary_duration: XmlElem<number | null>;
  /** Название должности */
  position_name: XmlElem<string | null>;
  place_name: XmlElem<string | null>;
  /** Расположение */
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  working_condition_type_id: XmlElem<number | null, WorkingConditionTypeCatalogDocumentTopElem>;
  salary_payment_type_id: XmlElem<number | null, SalaryPaymentTypeCatalogDocumentTopElem>;
  work_form_id: XmlElem<number | null, WorkFormCatalogDocumentTopElem>;
  payment_remuneration: XmlElem<string | null>;
  /** Оклад */
  salary: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  work_schedule_type_id: XmlElem<number | null, WorkScheduleTypeCatalogDocumentTopElem>;
  daily_duration: XmlElem<number | null>;
  weekly_duration: XmlElem<number | null>;
  start_work_type: XmlElem<string | null>;
  start_work_time: XmlElem<string | null>;
  end_work_time: XmlElem<string | null>;
  lunch_break_duration: XmlElem<number | null>;
  lunch_break_type: XmlElem<string | null>;
  start_lunch_break_time: XmlElem<string | null>;
  end_lunch_break_time: XmlElem<string | null>;
  shifts_number: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
