type PlaceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  timezone_id: XmlElem<number | null, typeof common.timezones>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
