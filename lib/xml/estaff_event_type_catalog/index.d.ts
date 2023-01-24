type EstaffEventTypeCatalogDocumentTopElem = XmlTopElem & { Doc: EstaffEventTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  event_type_estaff_id: XmlElem<string>;
  org_id: XmlElem<number>;
  recruitment_system_id: XmlElem<number>;
  position_commons: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EstaffEventTypeCatalogDocument = XmlDocument & { TopElem: EstaffEventTypeCatalogDocumentTopElem; };
