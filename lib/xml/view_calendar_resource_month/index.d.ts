type ViewCalendarResourceMonthDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewCalendarResourceMonthDocument;
  sel_date: XmlElem<Date>;
  resource_type: XmlElem<string, typeof lists.object_resource_types>;
  resource_catalog_name: XmlElem<string>;
  resource_field_name: XmlElem<string>;
  resource_field_id: XmlElem<string>;
  holiday_bk_color: XmlElem<string>;
  found_events: XmlElem<unknown>;
  distinct_resources: XmlElem<unknown>;
  months_day_num: XmlElem<unknown>;
};

type ViewCalendarResourceMonthDocument = XmlDocument & {
  TopElem: ViewCalendarResourceMonthDocumentTopElem;
  view_calendar_resource_month: ViewCalendarResourceMonthDocumentTopElem;
  OnInit(): void;
};
