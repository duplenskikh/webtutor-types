interface RatingDocumentObject {
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
}

type RatingDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: RatingDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  date: XmlElem<Date | null>;
  expert_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem> & MsPersonSdInnerBase;
  status: XmlElem<boolean>;
  objects: XmlMultiElem<RatingDocumentObject | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RatingDocument = XmlDocument & {
  TopElem: RatingDocumentTopElem;
  rating: RatingDocumentTopElem;
  DocDesc(): string;
};
