interface DevelopmentMethodDocumentDevelopmentObject {
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
}

type DevelopmentMethodDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DevelopmentMethodDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  development_objects: XmlMultiElem<DevelopmentMethodDocumentDevelopmentObject | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DevelopmentMethodDocument = XmlDocument & {
  TopElem: DevelopmentMethodDocumentTopElem;
  development_method: DevelopmentMethodDocumentTopElem;
  DocDesc(): string;
};
