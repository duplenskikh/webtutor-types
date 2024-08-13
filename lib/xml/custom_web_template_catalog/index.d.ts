type CustomWebTemplateCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AccessDocBase & {
  category: XmlElem<string | null>;
  cwt_type: XmlElem<string | null, typeof common.cwt_types>;
  out_type: XmlElem<string | null, typeof common.out_types>;
  mode: XmlElem<string | null>;
  template: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
