interface RestrictingTypeDocumentRestricting {
  id: XmlElem<string | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  start_time_from: XmlElem<string | null>;
  start_time_to: XmlElem<string | null>;
  end_time_from: XmlElem<string | null>;
  end_time_to: XmlElem<string | null>;
  min_work_days: XmlElem<number | null>;
  max_work_days: XmlElem<number | null>;
  min_hours: XmlElem<number | null>;
  max_hours: XmlElem<number | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type RestrictingTypeDocumentTopElem = XmlTopElem & {
  Doc: RestrictingTypeDocument;
  id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Название объекта */
  object_name: XmlElem<string | null>;
  period_type_id: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  restrictings: XmlMultiElem<RestrictingTypeDocumentRestricting | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RestrictingTypeDocument = XmlDocument & {
  TopElem: RestrictingTypeDocumentTopElem;
  restricting_type: RestrictingTypeDocumentTopElem;
};
