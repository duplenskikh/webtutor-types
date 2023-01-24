type ProviderCourseTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ProviderCourseTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProviderCourseTypeCatalogDocument = XmlDocument & { TopElem: ProviderCourseTypeCatalogDocumentTopElem; };
