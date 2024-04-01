interface ViewNotCertifiedReportDocumentPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  fullname: XmlElem<string>;
  code: XmlElem<string>;
  position_name: XmlElem<string>;
  position_parent_name: XmlElem<string>;
}

type ViewNotCertifiedReportDocumentTopElem = XmlTopElem & {
  Doc: ViewNotCertifiedReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  persons: XmlMultiElem<ViewNotCertifiedReportDocumentPerson>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewNotCertifiedReportDocument = XmlDocument & {
  TopElem: ViewNotCertifiedReportDocumentTopElem;
  view_not_certified_report: ViewNotCertifiedReportDocumentTopElem;
  OnInit(): void;
};
