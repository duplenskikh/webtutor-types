type BossTypeOperationCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
  operations: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
