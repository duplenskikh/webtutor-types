type LibraryMaterialSourceTypeDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: LibraryMaterialSourceTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  type: XmlElem<string, typeof common.resource_types>;
  library_player_id: XmlElem<number, LibraryPlayerCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  filenamemask: XmlElem<string>;
  script: XmlElem<string>;
  url: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  evaluate(fileUrl: string, optional: unknown): unknown;
};

type LibraryMaterialSourceTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialSourceTypeDocumentTopElem;
  library_material_source_type: LibraryMaterialSourceTypeDocumentTopElem;
  DocDesc(): unknown;
};
