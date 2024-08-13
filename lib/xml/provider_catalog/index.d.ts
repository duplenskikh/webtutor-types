type ProviderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  provider_product: XmlElem<boolean | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  dimension_id: XmlElem<number | null, DimensionCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
