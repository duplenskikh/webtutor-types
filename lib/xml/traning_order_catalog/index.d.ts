type TraningOrderCatalogDocumentTopElem = XmlTopElem & { Doc: TraningOrderCatalogDocument } & {
  id: XmlElem<number>;
  number: XmlElem<string>;
  date: XmlElem<Date>;
  signing_person_fullname: XmlElem<string>;
  responsible_person_fullname: XmlElem<string>;
  performer_person_fullname: XmlElem<string>;
  order_type_id: XmlElem<number>;
  event_id: XmlElem<number>;
  education_org_id: XmlElem<number>;
  pay_phase_id: XmlElem<number>;
  cost: XmlElem<number>;
  currency: XmlElem<string>;
  status: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TraningOrderCatalogDocument = XmlDocument & { TopElem: TraningOrderCatalogDocumentTopElem; };
