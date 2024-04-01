type BenefitItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
CustomElemsBase & {
  Doc: BenefitItemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.benefit_item_statuses>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  benefit_id: XmlElem<number, BenefitCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BenefitItemDocument = XmlDocument & {
  TopElem: BenefitItemDocumentTopElem;
  benefit_item: BenefitItemDocumentTopElem;
  DocDesc(): string;
};
