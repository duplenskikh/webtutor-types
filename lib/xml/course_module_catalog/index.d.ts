type CourseModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  /** Электронный курс */
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Внешний ID */
  eid: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  activation_count: XmlElem<number | null>;
  launch_count: XmlElem<number | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
