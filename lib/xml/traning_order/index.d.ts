type TraningOrderDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TraningOrderDocument;
  number: XmlElem<string>;
  order_type_id: XmlElem<number, OrderTypeCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
  pay_phase_id: XmlElem<number, PayPhaseCatalogDocumentTopElem>;
  expense_id: XmlElem<string>;
  cost: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  status: XmlElem<string, typeof common.traning_order_states>;
  signing_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  responsible_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  performer_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TraningOrderDocument = XmlDocument & {
  TopElem: TraningOrderDocumentTopElem;
};
