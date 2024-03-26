type EventPhaseCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.event_types>;
  status_id: XmlElem<string, typeof common.event_status_types>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
