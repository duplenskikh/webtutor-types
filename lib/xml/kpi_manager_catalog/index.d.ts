type KpiManagerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  manager_type: XmlElem<string | null, typeof common.exchange_object_types>;
  manager_id: XmlElem<number | null>;
  manager_name: XmlElem<string | null>;
  is_owner: XmlElem<boolean | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
