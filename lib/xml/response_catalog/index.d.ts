type ResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  status: XmlElem<string, typeof common.response_status_types>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  owner_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  basic_score: XmlElem<number>;
  basic_desc: XmlElem<string>;
  create_date: XmlElem<Date>;
  done_date: XmlElem<Date>;
  is_public: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
