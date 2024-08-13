type SiteCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  web_design_id: XmlElem<number | null, WebDesignCatalogDocumentTopElem>;
  lng_id: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  owner_object: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
