type TraningOrderDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: TraningOrderDocument;
  number: XmlElem<string | null>;
  order_type_id: XmlElem<number | null, OrderTypeCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string | null>;
  pay_phase_id: XmlElem<number | null, PayPhaseCatalogDocumentTopElem>;
  expense_id: XmlElem<string | null>;
  cost: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  status: XmlElem<string | null, typeof common.traning_order_states>;
  signing_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  responsible_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  performer_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type TraningOrderDocument = XmlDocument & {
  TopElem: TraningOrderDocumentTopElem;
  traning_order: TraningOrderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
