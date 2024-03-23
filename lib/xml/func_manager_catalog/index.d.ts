type FuncManagerCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  subordinate_position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  staff_object_type: XmlElem<string, typeof common.exchange_object_types>;
  staff_object_id: XmlElem<number>;
  staff_object_name: XmlElem<string>;
  is_native: XmlElem<boolean>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  is_finished: XmlElem<boolean>;
  parent_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
