type ResponseDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ResponseDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  status: XmlElem<string, typeof common.response_status_types>;
  response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  create_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  done_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  owner_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  is_public: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  basic_score: XmlElem<number>;
  basic_desc: XmlElem<string>;
  calc_basic_values(): unknown;
};

type ResponseDocument = XmlDocument & {
  TopElem: ResponseDocumentTopElem;
  response: ResponseDocumentTopElem;
  DocDesc(): unknown;
  OnBeforeSave(): unknown;
};
