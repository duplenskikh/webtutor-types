interface ViewNoRequestByGoodReportDocumentGood {
  id: XmlElem<number, GoodCatalogDocumentTopElem>;
  name: XmlElem<string>;
  amount: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  collaborator_email: XmlElem<string>;
  collaborator_subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  collaborator_subdivision_name: XmlElem<string>;
}

type ViewNoRequestByGoodReportDocumentTopElem = XmlTopElem & {
  Doc: ViewNoRequestByGoodReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  is_subdivision_hierarchy: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  goods: XmlMultiElem<ViewNoRequestByGoodReportDocumentGood>;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewNoRequestByGoodReportDocument = XmlDocument & {
  TopElem: ViewNoRequestByGoodReportDocumentTopElem;
  view_no_request_by_good_report: ViewNoRequestByGoodReportDocumentTopElem;
  OnInit(): void;
};
