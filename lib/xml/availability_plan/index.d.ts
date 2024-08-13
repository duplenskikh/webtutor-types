interface AvailabilityPlanDocumentPeriod {
  id: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
}

type AvailabilityPlanDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: AvailabilityPlanDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  start_hour: XmlElem<number>;
  finish_hour: XmlElem<number>;
  periods: XmlMultiElem<AvailabilityPlanDocumentPeriod | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type AvailabilityPlanDocument = XmlDocument & {
  TopElem: AvailabilityPlanDocumentTopElem;
  availability_plan: AvailabilityPlanDocumentTopElem;
  DocDesc(): string;
};
