type BossTypeOperationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  operation_id: XmlElem<number, OperationCatalogDocumentTopElem>;
  operations: XmlElem<string>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
