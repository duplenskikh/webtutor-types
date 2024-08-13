type LibraryMaterialSourceTypeDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: LibraryMaterialSourceTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  type: XmlElem<string | null, typeof common.resource_types>;
  library_player_id: XmlElem<number | null, LibraryPlayerCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  filenamemask: XmlElem<string | null>;
  script: XmlElem<string | null>;
  url: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  evaluate(fileUrl: string, optional: unknown): unknown;
};

type LibraryMaterialSourceTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialSourceTypeDocumentTopElem;
  library_material_source_type: LibraryMaterialSourceTypeDocumentTopElem;
  DocDesc(): string;
};
