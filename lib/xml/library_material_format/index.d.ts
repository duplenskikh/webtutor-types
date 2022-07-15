interface LibraryMaterialFormatView {
  selector?: XmlElem<string>;
}

interface LibraryMaterialFormatTopElem extends XmlTopElem<LibraryMaterialFormatDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  format_type_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<LibraryMaterialFormatView>;
}

type LibraryMaterialFormatDocument = XmlDocument<LibraryMaterialFormatTopElem>;
