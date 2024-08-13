interface ClShapeDocumentParams {
  type: XmlElem<string | null>;
  stroked: XmlElem<string | null>;
  filled: XmlElem<string | null>;
  coordsize: XmlElem<string | null>;
  adj: XmlElem<string | null>;
  path: XmlElem<string | null>;
}

interface ClShapeDocumentFormula {
  expr: XmlElem<string | null>;
}

interface ClShapeDocumentHandle {
  position: XmlElem<string | null>;
  xrange: XmlElem<string | null>;
  yrange: XmlElem<string | null>;
}

type ClShapeDocumentTopElem = XmlTopElem & {
  Doc: ClShapeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  category_label: XmlElem<string | null>;
  type: XmlElem<string | null>;
  type_name: XmlElem<string | null>;
  params: XmlElem<ClShapeDocumentParams | null>;
  formulas: XmlMultiElem<ClShapeDocumentFormula | null>;
  textboxrect: XmlElem<string | null>;
  otherxml: XmlElem<string | null>;
  handles: XmlMultiElem<ClShapeDocumentHandle | null>;
  ico: XmlElem<Binary | null>;
  vml: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ClShapeDocument = XmlDocument & {
  TopElem: ClShapeDocumentTopElem;
  cl_shape: ClShapeDocumentTopElem;
  DocDesc(): string;
};
