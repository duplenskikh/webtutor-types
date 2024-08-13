type ObjectParamCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  /** Активное уведомление */
  is_enabled: XmlElem<boolean>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  sec_object_code: XmlElem<string | null>;
  base_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  base_object_id: XmlElem<number | null>;
  base_object_name: XmlElem<string | null>;
  OnBuild(): void;
};
