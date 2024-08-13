interface SubmissionTypeDocumentRecipient extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentSender extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface SubmissionTypeDocumentPhase {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Дата начала периода */
  period_date_start: XmlElem<Date | null>;
  /** Дата окончания периода */
  period_date_finish: XmlElem<Date | null>;
  /** Дата начала заполнения */
  date_start: XmlElem<Date | null>;
  /** Дата окончания заполнения */
  date_finish: XmlElem<Date | null>;
  /** Статус */
  collect_state: XmlElem<string, typeof common.collect_states>;
}

type SubmissionTypeDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: SubmissionTypeDocument;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Периодичность */
  periodity_id: XmlElem<string | null, typeof common.perioditys>;
  /** Срок формирования этапов */
  period_form: XmlElem<number | null>;
  /** Получатели */
  recipients: XmlMultiElem<SubmissionTypeDocumentRecipient | null>;
  /** Отчитывающиеся */
  senders: XmlMultiElem<SubmissionTypeDocumentSender | null>;
  /** Этапы */
  phases: XmlMultiElem<SubmissionTypeDocumentPhase | null>;
  /** Требует подтверждения */
  confirm_req: XmlElem<boolean>;
  /** Использовать форму для отображения на портале */
  use_form: XmlElem<boolean>;
  /** Программный код заполнения данных */
  eval_prev_form: XmlElem<string | null>;
  /** Программный код обработки данных */
  eval_post_form: XmlElem<string | null>;
  /** Файл */
  form_file: XmlElem<InsertFileBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubmissionTypeDocument = XmlDocument & {
  TopElem: SubmissionTypeDocumentTopElem;
  submission_type: SubmissionTypeDocumentTopElem;
  DocDesc(): string;
};
