type ObjectParamCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number>;
  is_enabled: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  sec_object_code: XmlElem<string>;
  base_object_type: XmlElem<string, typeof common.exchange_object_types>;
  base_object_id: XmlElem<number>;
  base_object_name: XmlElem<string>;
  OnBuild(): void;
};
