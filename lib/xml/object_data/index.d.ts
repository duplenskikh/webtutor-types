type ObjectDataDocumentTopElem = XmlTopElem &
ObjectTypeBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ObjectDataDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_data_type_id: XmlElem<number | null, ObjectDataTypeCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  create_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_id: XmlElem<number | null>;
  sec_object_name: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  data: XmlElem<string | null>;
  data_str: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type ObjectDataDocument = XmlDocument & {
  TopElem: ObjectDataDocumentTopElem;
  object_data: ObjectDataDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
