interface ClConstLocalization {
  id?: XmlElem<number>;
  text?: XmlElem<string>;
  imprint?: XmlElem<string>;
}

interface ClConstObjectTypeObject {
  id?: XmlElem<number>;
}

interface ClConstObjectType {
  id?: XmlElem<string>;
  objects?: XmlMultiElem<ClConstObjectTypeObject>;
}

interface ClConstFlag {
  id?: XmlElem<string>;
}

interface ClConstTopElem extends XmlTopElem<ClConstDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  localizations?: XmlMultiElem<ClConstLocalization>;
  object_types?: XmlMultiElem<ClConstObjectType>;
  flags?: XmlMultiElem<ClConstFlag>;
  set_value?(): any;
}

type ClConstDocument = XmlDocument<ClConstTopElem>;
