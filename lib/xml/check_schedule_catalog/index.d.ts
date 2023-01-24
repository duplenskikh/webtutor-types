type CheckScheduleCatalogDocumentTopElem = XmlTopElem & { Doc: CheckScheduleCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  type_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CheckScheduleCatalogDocument = XmlDocument & { TopElem: CheckScheduleCatalogDocumentTopElem; };
