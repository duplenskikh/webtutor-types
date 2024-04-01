interface ViewCalendarDocumentView {
  tab_selector: XmlElem<string>;
}

type ViewCalendarDocumentTopElem = XmlTopElem & {
  Doc: ViewCalendarDocument;
  calendar_items: XmlElem<unknown>;
  view: XmlElem<ViewCalendarDocumentView>;
};

type ViewCalendarDocument = XmlDocument & {
  TopElem: ViewCalendarDocumentTopElem;
  view_calendar: ViewCalendarDocumentTopElem;
  OnInit(): void;
};
