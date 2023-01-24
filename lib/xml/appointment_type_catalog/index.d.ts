type AppointmentTypeCatalogDocumentTopElem = XmlTopElem & { Doc: AppointmentTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AppointmentTypeCatalogDocument = XmlDocument & { TopElem: AppointmentTypeCatalogDocumentTopElem; };
