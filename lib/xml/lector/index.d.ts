type LectorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
CustomElemsBase &
AdminAccessBase &
PathSubsBase & {
  Doc: LectorDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string, typeof common.lector_types>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Сотрудник */
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность */
  person_position_name: XmlElem<string | null>;
  /** Подразделение */
  person_subdivision_name: XmlElem<string | null>;
  /** Разрешена публикация на портале описания и контактной информации */
  allow_publication: XmlElem<boolean>;
  /** Является уволенным */
  is_dismiss: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  lector_fullname(): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type LectorDocument = XmlDocument & {
  TopElem: LectorDocumentTopElem;
  lector: LectorDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
