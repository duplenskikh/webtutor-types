type CustomWebTemplateCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AccessDocBase & {
  category: XmlElem<string>;
  cwt_type: XmlElem<string, typeof common.cwt_types>;
  out_type: XmlElem<string, typeof common.out_types>;
  mode: XmlElem<string>;
  template: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};
