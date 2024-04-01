interface ViewCertificateTypeReportDocumentCertificateType {
  id: XmlElem<number>;
  name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  education_org_name: XmlElem<string>;
  certificates_num: XmlElem<number>;
  required_certificates_num: XmlElem<number>;
}

type ViewCertificateTypeReportDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: ViewCertificateTypeReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  set_sel_action(list: unknown, screen: unknown): unknown;
  certificate_types: XmlMultiElem<ViewCertificateTypeReportDocumentCertificateType>;
  data: XmlElem<TableDataBase>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
};

type ViewCertificateTypeReportDocument = XmlDocument & {
  TopElem: ViewCertificateTypeReportDocumentTopElem;
  view_certificate_type_report: ViewCertificateTypeReportDocumentTopElem;
  OnInit(): void;
};
