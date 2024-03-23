type EventGroupCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
