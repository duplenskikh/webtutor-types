type SubscriptionCatalogDocumentTopElem = XmlTopElem & { Doc: SubscriptionCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  date_to: XmlElem<Date>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  document_id: XmlElem<number>;
  include_subdocs: XmlElem<boolean>;
  date_last_action: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SubscriptionCatalogDocument = XmlDocument & { TopElem: SubscriptionCatalogDocumentTopElem; };
