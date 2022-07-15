interface DevelopmentMethodDevelopmentObject {
  object_name?: XmlElem<string>;
}

interface DevelopmentMethodView {
  selector?: XmlElem<string>;
}

interface DevelopmentMethodTopElem extends XmlTopElem<DevelopmentMethodDocument>, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  development_objects?: XmlMultiElem<DevelopmentMethodDevelopmentObject>;
  view?: XmlElem<DevelopmentMethodView>;
}

type DevelopmentMethodDocument = XmlDocument<DevelopmentMethodTopElem>;
