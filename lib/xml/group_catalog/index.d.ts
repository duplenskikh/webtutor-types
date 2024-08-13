type GroupCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Количество сотрудников */
  person_num: XmlElem<number | null>;
  /** Форум */
  forum_id: XmlElem<number | null, ForumCatalogDocumentTopElem>;
  /** Признак динамической группы */
  is_dynamic: XmlElem<boolean>;
  /** Является учебной */
  is_educ: XmlElem<boolean>;
  /** Скрытая группа */
  is_hidden: XmlElem<boolean>;
  /** Возможно оставлять сообщения на ленту */
  allow_social_post: XmlElem<boolean>;
  /** Вступление в группу */
  join_mode: XmlElem<string | null, typeof common.join_mode_types>;
  /** Профиль KPI */
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профили KPI */
  kpi_profiles_id: XmlMultiElemObject<number | null, KpiProfileCatalogDocumentTopElem>;
  /** Профиль премирования */
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  tags: XmlElem<string | null>;
  /** Тэги */
  tag_id: XmlMultiElemObject<number | null, TagCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
