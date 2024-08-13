interface AvailabilityPlanDocumentPeriod {
  id: XmlElem<string | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type AvailabilityPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: AvailabilityPlanDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  start_hour: XmlElem<number>;
  finish_hour: XmlElem<number>;
  /** Периоды */
  periods: XmlMultiElem<AvailabilityPlanDocumentPeriod | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
};

type AvailabilityPlanDocument = XmlDocument & {
  TopElem: AvailabilityPlanDocumentTopElem;
  availability_plan: AvailabilityPlanDocumentTopElem;
  DocDesc(): string;
};
