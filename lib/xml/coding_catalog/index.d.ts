type CodingCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  next_index: XmlElem<number>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
