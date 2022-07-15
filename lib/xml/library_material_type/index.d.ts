interface LibraryMaterialTypeView {
  selector?: XmlElem<string>;
}

interface LibraryMaterialTypeTopElem extends XmlTopElem<LibraryMaterialTypeDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<LibraryMaterialTypeView>;
}

type LibraryMaterialTypeDocument = XmlDocument<LibraryMaterialTypeTopElem>;
