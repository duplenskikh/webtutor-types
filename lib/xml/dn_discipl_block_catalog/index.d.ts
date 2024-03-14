type DnDisciplBlockCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  block_id: XmlElem<number, DnBlockDisciplineCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
