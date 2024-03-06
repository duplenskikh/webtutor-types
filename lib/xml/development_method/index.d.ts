interface DevelopmentMethodDocumentDevelopmentObject {
  object_name: XmlElem<string, typeof common.exchange_object_types>;
}

type DevelopmentMethodDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DevelopmentMethodDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  development_objects: XmlMultiElem<DevelopmentMethodDocumentDevelopmentObject>;
  doc_info: XmlElem<DocInfoBase>;
};

type DevelopmentMethodDocument = XmlDocument & {
  TopElem: DevelopmentMethodDocumentTopElem;
  development_method: DevelopmentMethodDocumentTopElem;
  DocDesc(): unknown;
};
