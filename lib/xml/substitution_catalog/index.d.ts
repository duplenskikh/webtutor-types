type SubstitutionCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Статус */
  status: XmlElem<string, typeof common.substitution_status_types>;
  substitution_type_id: XmlElem<number | null, SubstitutionTypeCatalogDocumentTopElem>;
  target_object_type: XmlElem<string | null>;
  target_object_selector: XmlElem<string | null>;
  target_object_id: XmlMultiElemObject<number | null>;
  data_str: XmlElem<string | null>;
  person_selector: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Организация объекта */
  person_org_name: XmlElem<string | null>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
