type TraningOrderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  number: XmlElem<string>;
  date: XmlElem<Date>;
  signing_person_fullname: XmlElem<string>;
  responsible_person_fullname: XmlElem<string>;
  performer_person_fullname: XmlElem<string>;
  order_type_id: XmlElem<number, OrderTypeCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  pay_phase_id: XmlElem<number, PayPhaseCatalogDocumentTopElem>;
  cost: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  status: XmlElem<string, typeof common.traning_order_states>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
