interface LibraryMaterialSourceTypeView {
  selector?: XmlElem<string>;
}

interface LibraryMaterialSourceTypeTopElem extends XmlTopElem<LibraryMaterialSourceTypeDocument>, WebVariablesBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_active?: XmlElem<boolean>;
  type?: XmlElem<string>;
  library_player_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  filenamemask?: XmlElem<string>;
  script?: XmlElem<string>;
  url?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  view?: XmlElem<LibraryMaterialSourceTypeView>;
  evaluate?(): any;
}

type LibraryMaterialSourceTypeDocument = XmlDocument<LibraryMaterialSourceTypeTopElem>;
