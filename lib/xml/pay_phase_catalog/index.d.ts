type PayPhaseCatalogDocumentTopElem = XmlTopElem & { Doc: PayPhaseCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  event_id: XmlElem<number>;
  event_name: XmlElem<string>;
  cost: XmlElem<number>;
  currency: XmlElem<string>;
  invoice_sum: XmlElem<number>;
  draft_sum: XmlElem<number>;
  act_sum: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PayPhaseCatalogDocument = XmlDocument & { TopElem: PayPhaseCatalogDocumentTopElem; };
