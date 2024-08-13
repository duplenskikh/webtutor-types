type ResponseDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ResponseDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  status: XmlElem<string, typeof common.response_status_types>;
  response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  create_date: XmlElem<Date | null>;
  plan_date: XmlElem<Date | null>;
  done_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  owner_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  object_start_date: XmlElem<Date | null>;
  is_public: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  basic_score: XmlElem<number | null>;
  basic_desc: XmlElem<string | null>;
  calc_basic_values(): void;
};

type ResponseDocument = XmlDocument & {
  TopElem: ResponseDocumentTopElem;
  response: ResponseDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
