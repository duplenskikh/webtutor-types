type KpiManagerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  manager_type: XmlElem<string, typeof common.exchange_object_types>;
  manager_id: XmlElem<number>;
  manager_name: XmlElem<string>;
  is_owner: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
