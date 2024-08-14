interface SubstitutionDocumentTargetObject {
  target_object_id: XmlElem<number | null>;
}

type SubstitutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
ObjectTypeBase &
CustomElemsBase & {
  Doc: SubstitutionDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string | null>;
  target_object_selector: XmlElem<string | null>;
  target_objects: XmlMultiElem<SubstitutionDocumentTargetObject | null>;
  data_str: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  person_selector: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubstitutionDocument = XmlDocument & {
  TopElem: SubstitutionDocumentTopElem;
  substitution: SubstitutionDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
