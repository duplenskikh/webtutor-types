interface SubstitutionDocumentTargetObject {
  target_object_id: XmlElem<number>;
}

type SubstitutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: SubstitutionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string>;
  target_object_selector: XmlElem<string>;
  target_objects: XmlMultiElem<SubstitutionDocumentTargetObject>;
  data_str: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_selector: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SubstitutionDocument = XmlDocument & {
  TopElem: SubstitutionDocumentTopElem;
  substitution: SubstitutionDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
