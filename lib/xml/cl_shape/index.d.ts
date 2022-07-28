interface ClShapeDocumentFormula {
  expr?: XmlElem<string>;
}

interface ClShapeDocumentHandle {
  position?: XmlElem<string>;
  xrange?: XmlElem<string>;
  yrange?: XmlElem<string>;
}

type ClShapeDocumentTopElem = XmlTopElem & { Doc: ClShapeDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  category_label?: XmlElem<string>;
  type?: XmlElem<string>;
  type_name?: XmlElem<string>;
  formulas?: XmlMultiElem<ClShapeDocumentFormula>;
  textboxrect?: XmlElem<string>;
  otherxml?: XmlElem<string>;
  handles?: XmlMultiElem<ClShapeDocumentHandle>;
  ico?: XmlElem<Binary>;
  vml?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ClShapeDocument = XmlDocument & { TopElem: ClShapeDocumentTopElem; };
