type ProviderCatalogDocumentTopElem = XmlTopElem & { Doc: ProviderCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider_product: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  dimension_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProviderCatalogDocument = XmlDocument & { TopElem: ProviderCatalogDocumentTopElem; };
