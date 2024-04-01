type ViewCustomReportsDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase & {
  Doc: ViewCustomReportsDocument;
  counter: XmlElem<number>;
};

type ViewCustomReportsDocument = XmlDocument & {
  TopElem: ViewCustomReportsDocumentTopElem;
  view_custom_reports: ViewCustomReportsDocumentTopElem;
  OnInit(): void;
};
