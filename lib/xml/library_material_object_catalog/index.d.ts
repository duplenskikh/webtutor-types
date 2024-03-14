type LibraryMaterialObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  library_material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  library_material_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_catalog: XmlElem<string>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
