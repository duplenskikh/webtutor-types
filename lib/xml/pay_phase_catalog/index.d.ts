type PayPhaseCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  cost: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  invoice_sum: XmlElem<number | null>;
  draft_sum: XmlElem<number | null>;
  act_sum: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
