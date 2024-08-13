interface SubstitutionDocumentTargetObject {
  target_object_id: XmlElem<number | null>;
}

type SubstitutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: SubstitutionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string | null>;
  target_object_selector: XmlElem<string | null>;
  target_objects: XmlMultiElem<SubstitutionDocumentTargetObject | null>;
  data_str: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  person_selector: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubstitutionDocument = XmlDocument & {
  TopElem: SubstitutionDocumentTopElem;
  substitution: SubstitutionDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
