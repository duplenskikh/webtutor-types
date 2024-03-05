interface ClConstDocumentLocalization {
  id: XmlElem<number, ClLocalizationCatalogDocumentTopElem>;
  text: XmlElem<string>;
  imprint: XmlElem<string>;
}

interface ClConstDocumentObjectTypeObject {
  id: XmlElem<number>;
}

interface ClConstDocumentObjectType {
  id: XmlElem<string, typeof common.exchange_object_types>;
  objects: XmlMultiElem<ClConstDocumentObjectTypeObject>;
}

interface ClConstDocumentFlag {
  id: XmlElem<string>;
}

type ClConstDocumentTopElem = XmlTopElem & {
  Doc: ClConstDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  localizations: XmlMultiElem<ClConstDocumentLocalization>;
  object_types: XmlMultiElem<ClConstDocumentObjectType>;
  flags: XmlMultiElem<ClConstDocumentFlag>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  set_value(LOC_ID: number, VALUE: unknown): unknown;
};

type ClConstDocument = XmlDocument & {
  TopElem: ClConstDocumentTopElem;
};
