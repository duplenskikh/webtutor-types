type SubscriptionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  create_date: XmlElem<Date | null>;
  date_to: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  document_id: XmlElem<number | null>;
  include_subdocs: XmlElem<boolean>;
  date_last_action: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
