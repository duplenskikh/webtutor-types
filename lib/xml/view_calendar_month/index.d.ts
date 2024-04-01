type ViewCalendarMonthDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewCalendarMonthDocument;
  sel_date: XmlElem<Date>;
  cur_date: XmlElem<Date>;
  bk_color: XmlElem<string>;
  sel_day_bk_color: XmlElem<string>;
  today_bk_color: XmlElem<string>;
  other_day_bk_color: XmlElem<string>;
  header_bk_color: XmlElem<string>;
  found_events: XmlElem<unknown>;
  list_days: XmlElem<unknown>;
  months_day_num: XmlElem<unknown>;
};

type ViewCalendarMonthDocument = XmlDocument & {
  TopElem: ViewCalendarMonthDocumentTopElem;
  view_calendar_month: ViewCalendarMonthDocumentTopElem;
  OnInit(): void;
};
