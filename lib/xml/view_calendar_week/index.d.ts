type ViewCalendarWeekDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewCalendarWeekDocument;
  sel_date: XmlElem<Date>;
  cur_date: XmlElem<Date>;
  min_date: XmlElem<Date>;
  found_events: XmlElem<unknown>;
  bk_color: XmlElem<string>;
  sel_day_bk_color: XmlElem<string>;
  other_day_bk_color: XmlElem<string>;
  today_bk_color: XmlElem<string>;
  week_days: XmlElem<unknown>;
};

type ViewCalendarWeekDocument = XmlDocument & {
  TopElem: ViewCalendarWeekDocumentTopElem;
  view_calendar_week: ViewCalendarWeekDocumentTopElem;
  OnInit(): void;
};
