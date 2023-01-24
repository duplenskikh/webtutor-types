type AvailabilityPlanCatalogDocumentTopElem = XmlTopElem & { Doc: AvailabilityPlanCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  catalog_name: XmlElem<string>;
  object_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type AvailabilityPlanCatalogDocument = XmlDocument & { TopElem: AvailabilityPlanCatalogDocumentTopElem; };
