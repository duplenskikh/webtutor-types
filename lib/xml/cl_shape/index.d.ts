interface ClShapeDocumentParams {
  type: XmlElem<string>;
  stroked: XmlElem<string>;
  filled: XmlElem<string>;
  coordsize: XmlElem<string>;
  adj: XmlElem<string>;
  path: XmlElem<string>;
}

interface ClShapeDocumentFormula {
  expr: XmlElem<string>;
}

interface ClShapeDocumentHandle {
  position: XmlElem<string>;
  xrange: XmlElem<string>;
  yrange: XmlElem<string>;
}

type ClShapeDocumentTopElem = XmlTopElem & {
  Doc: ClShapeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  category_label: XmlElem<string>;
  type: XmlElem<string>;
  type_name: XmlElem<string>;
  params: XmlElem<ClShapeDocumentParams>;
  formulas: XmlMultiElem<ClShapeDocumentFormula>;
  textboxrect: XmlElem<string>;
  otherxml: XmlElem<string>;
  handles: XmlMultiElem<ClShapeDocumentHandle>;
  ico: XmlElem<Binary>;
  vml: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ClShapeDocument = XmlDocument & {
  TopElem: ClShapeDocumentTopElem;
  cl_shape: ClShapeDocumentTopElem;
  DocDesc(): unknown;
};
