interface ViewPersonnelDocsStatReportDocumentPersonnelDocument {
  personnel_document_type_name: XmlElem<string>;
  count_docs: XmlElem<number>;
  signed_docs: XmlElem<number>;
  unsigned_docs: XmlElem<number>;
  cancel_docs: XmlElem<number>;
  annul_docs: XmlElem<number>;
}

type ViewPersonnelDocsStatReportDocumentTopElem = XmlTopElem & {
  Doc: ViewPersonnelDocsStatReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  personnel_document_type_id: XmlElem<number, PersonnelDocumentTypeCatalogDocumentTopElem>;
  person_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
  person_subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  date_start: XmlElem<Date>;
  date_end: XmlElem<Date>;
  personnel_documents: XmlMultiElem<ViewPersonnelDocsStatReportDocumentPersonnelDocument>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  report_access_type: XmlElem<string>;
};

type ViewPersonnelDocsStatReportDocument = XmlDocument & {
  TopElem: ViewPersonnelDocsStatReportDocumentTopElem;
  view_personnel_docs_stat_report: ViewPersonnelDocsStatReportDocumentTopElem;
  OnInit(): void;
};
