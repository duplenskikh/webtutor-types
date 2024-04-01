type CalendarBaseDocumentTopElem = XmlTopElem & {
  Doc: CalendarBaseDocument;
  days_text_color: XmlElem<string>;
  bk_color: XmlElem<string>;
  sel_day_bk_color: XmlElem<string>;
  weekdays_text_color: XmlElem<string>;
  sunday_text_color: XmlElem<string>;
  saturday_text_color: XmlElem<string>;
  sundays_text_color: XmlElem<string>;
  saturdays_text_color: XmlElem<string>;
  today_text_color: XmlElem<string>;
  today_bk_color: XmlElem<string>;
  month_text_color: XmlElem<string>;
  pointer_text_color: XmlElem<string>;
  months_name: XmlElem<unknown>;
  months_day_num: XmlElem<unknown>;
  is_double: XmlElem<boolean>;
  display_year: XmlElem<boolean>;
  sel_date: XmlElem<Date>;
  list_date: XmlElem<Date>;
};

type CalendarBaseDocument = XmlDocument & {
  TopElem: CalendarBaseDocumentTopElem;
  calendar_base: CalendarBaseDocumentTopElem;
};
