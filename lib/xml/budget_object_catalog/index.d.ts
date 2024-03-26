type BudgetObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  budget_id: XmlElem<number, BudgetCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  all: XmlElem<boolean>;
  object_id: XmlElem<number>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
