interface RatingDocumentObject {
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
}

type RatingDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: RatingDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  date: XmlElem<Date>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  status: XmlElem<boolean>;
  objects: XmlMultiElem<RatingDocumentObject>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RatingDocument = XmlDocument & {
  TopElem: RatingDocumentTopElem;
  rating: RatingDocumentTopElem;
  DocDesc(): string;
};
