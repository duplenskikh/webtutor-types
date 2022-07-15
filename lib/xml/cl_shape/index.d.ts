interface ClShapeFormula {
  expr?: XmlElem<string>;
}

interface ClShapeHandle {
  position?: XmlElem<string>;
  xrange?: XmlElem<string>;
  yrange?: XmlElem<string>;
}

interface ClShapeParams {
  type?: XmlElem<string>;
  stroked?: XmlElem<string>;
  filled?: XmlElem<string>;
  coordsize?: XmlElem<string>;
  adj?: XmlElem<string>;
  path?: XmlElem<string>;
}

interface ClShapeView {
  selector?: XmlElem<string>;
  ico_url?: XmlElem<string>;
}

interface ClShapeTopElem extends XmlTopElem<ClShapeDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  category_label?: XmlElem<string>;
  type?: XmlElem<string>;
  type_name?: XmlElem<string>;
  textboxrect?: XmlElem<string>;
  otherxml?: XmlElem<string>;
  ico?: XmlElem<Binary>;
  vml?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  formulas?: XmlMultiElem<ClShapeFormula>;
  handles?: XmlMultiElem<ClShapeHandle>;
  params?: XmlElem<ClShapeParams>;
  view?: XmlElem<ClShapeView>;
}

type ClShapeDocument = XmlDocument<ClShapeTopElem>;
