type ExpertQuestionDocumentTopElem = XmlTopElem &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
FileListBase & {
  Doc: ExpertQuestionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Вопрос */
  question: XmlElem<string | null>;
  /** Ответ */
  answer: XmlElem<string | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Нормативная дата */
  normative_date: XmlElem<Date | null>;
  answer_date: XmlElem<Date | null>;
  /** Эксперт */
  expert_id: XmlElem<number | null, ExpertCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<boolean>;
  /** Является часто задаваемым вопросом */
  is_faq: XmlElem<boolean>;
  /** Отобразить вопрос в общем списке */
  is_disclosed: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Файл */
  question_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Файл */
  answer_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
};

type ExpertQuestionDocument = XmlDocument & {
  TopElem: ExpertQuestionDocumentTopElem;
  expert_question: ExpertQuestionDocumentTopElem;
  DocDesc(): string;
};
