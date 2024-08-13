type ProviderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  provider_product: XmlElem<boolean | null>;
  role_id: XmlMultiElemObject<number | null>;
  dimension_id: XmlElem<number | null, DimensionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
