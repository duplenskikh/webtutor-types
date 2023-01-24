type CustomWebTemplateCatalogDocumentTopElem = XmlTopElem & { Doc: CustomWebTemplateCatalogDocument } & 
ObjectCodeNameBase &
AccessDocBase & {
  category: XmlElem<string>;
  cwt_type: XmlElem<string>;
  out_type: XmlElem<string>;
  mode: XmlElem<string>;
  template: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  is_enabled: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type CustomWebTemplateCatalogDocument = XmlDocument & { TopElem: CustomWebTemplateCatalogDocumentTopElem; };
