type EventLectorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  is_model: XmlElem<boolean>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.lector_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  lector_fullname: XmlElem<string>;
  hours: XmlElem<number>;
  is_tutor: XmlElem<boolean>;
  is_collaborator: XmlElem<boolean>;
  is_preparation: XmlElem<boolean>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
