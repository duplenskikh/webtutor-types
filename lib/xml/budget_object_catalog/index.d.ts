type BudgetObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  budget_id: XmlElem<number | null, BudgetCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  all: XmlElem<boolean>;
  object_id: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
