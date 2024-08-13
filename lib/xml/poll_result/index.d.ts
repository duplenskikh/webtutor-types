interface PollResultDocumentQuestion {
  id: XmlElem<number | null>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Значение */
  value: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  read_only: XmlElem<boolean | null>;
}

type PollResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollResultDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Процедура опроса */
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  /** Пользователь */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Заполнена */
  is_done: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  save_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<number>;
  /** План обучения */
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  /** Вопросы */
  questions: XmlMultiElem<PollResultDocumentQuestion | null>;
  last_item_id: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  use_proctoring: XmlElem<boolean>;
  update_name(): unknown;
};

type PollResultDocument = XmlDocument & {
  TopElem: PollResultDocumentTopElem;
  poll_result: PollResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
