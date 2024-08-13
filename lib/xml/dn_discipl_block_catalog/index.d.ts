type DnDisciplBlockCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  block_id: XmlElem<number | null, DnBlockDisciplineCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  discipl_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
