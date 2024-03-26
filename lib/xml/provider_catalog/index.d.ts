type ProviderCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider_product: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  dimension_id: XmlElem<number, DimensionCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
