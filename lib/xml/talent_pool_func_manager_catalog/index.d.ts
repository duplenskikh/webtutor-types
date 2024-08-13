type TalentPoolFuncManagerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
