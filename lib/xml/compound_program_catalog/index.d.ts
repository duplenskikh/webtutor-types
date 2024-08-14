type CompoundProgramCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Минимальное количество участников */
  min_person_num: XmlElem<number | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  allow_self_assignment: XmlElem<boolean>;
  /** Преподаватель */
  lectors_id: XmlMultiElemObject<number | null, LectorCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  objects_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
