interface LibraryMaterialDocumentContentContentContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
}

interface LibraryMaterialDocumentContentContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<LibraryMaterialDocumentContentContentContentContent>;
}

interface LibraryMaterialDocumentContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<LibraryMaterialDocumentContentContentContent>;
}

interface LibraryMaterialDocumentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<LibraryMaterialDocumentContentContent>;
}

type LibraryMaterialDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialDocument;
  contents: XmlMultiElem<LibraryMaterialDocumentContent>;
};

type LibraryMaterialDocument = XmlDocument & {
  TopElem: LibraryMaterialDocumentTopElem;
};
