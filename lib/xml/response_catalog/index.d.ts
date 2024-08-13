type ResponseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  status: XmlElem<string, typeof common.response_status_types>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  owner_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  basic_score: XmlElem<number | null>;
  basic_desc: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  done_date: XmlElem<Date | null>;
  is_public: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
