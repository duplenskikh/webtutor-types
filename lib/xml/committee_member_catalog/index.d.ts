type CommitteeMemberCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип объекта */
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  /** Тип участника проекта */
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  personnel_committee_id: XmlElem<number | null, PersonnelCommitteeCatalogDocumentTopElem>;
  /** Статус */
  status: XmlElem<string, typeof common.committee_member_status_types>;
  /** Тип участника проекта */
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
