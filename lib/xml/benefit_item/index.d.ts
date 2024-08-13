type BenefitItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitItemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.benefit_item_statuses>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  benefit_id: XmlElem<number | null, BenefitCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BenefitItemDocument = XmlDocument & {
  TopElem: BenefitItemDocumentTopElem;
  benefit_item: BenefitItemDocumentTopElem;
  DocDesc(): string;
};
