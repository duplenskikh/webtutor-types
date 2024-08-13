type TraningOrderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  number: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  signing_person_fullname: XmlElem<string | null>;
  responsible_person_fullname: XmlElem<string | null>;
  performer_person_fullname: XmlElem<string | null>;
  order_type_id: XmlElem<number | null, OrderTypeCatalogDocumentTopElem>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  pay_phase_id: XmlElem<number | null, PayPhaseCatalogDocumentTopElem>;
  cost: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  status: XmlElem<string | null, typeof common.traning_order_states>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
