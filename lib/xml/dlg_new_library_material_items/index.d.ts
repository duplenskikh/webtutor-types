type DlgNewLibraryMaterialItemsDocumentTopElem = XmlTopElem & {
  Doc: DlgNewLibraryMaterialItemsDocument;
  title: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  number: XmlElem<number>;
  format_id: XmlElem<string, typeof common.material_format_types>;
};

type DlgNewLibraryMaterialItemsDocument = XmlDocument & {
  TopElem: DlgNewLibraryMaterialItemsDocumentTopElem;
  dlg_new_library_material_items: DlgNewLibraryMaterialItemsDocumentTopElem;
};
