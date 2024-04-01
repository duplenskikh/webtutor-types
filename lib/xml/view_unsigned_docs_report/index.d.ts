interface ViewUnsignedDocsReportDocumentPersonnelDocument {
  create_date: XmlElem<Date>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  provider_legal_name: XmlElem<string>;
  personnel_document_type_name: XmlElem<string>;
  signature_person: XmlElem<boolean>;
  signature_org: XmlElem<boolean>;
}

type ViewUnsignedDocsReportDocumentTopElem = XmlTopElem & {
  Doc: ViewUnsignedDocsReportDocument;
  report_name: XmlElem<string>;
  is_minimized: XmlElem<boolean>;
  person_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  essential_id: XmlElem<string>;
  person_subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  personnel_document_type_id: XmlElem<number, PersonnelDocumentTypeCatalogDocumentTopElem>;
  hier_sub_select: XmlElem<boolean>;
  date_start: XmlElem<Date>;
  date_end: XmlElem<Date>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  wait_signed_type: XmlElem<string>;
  personnel_documents: XmlMultiElem<ViewUnsignedDocsReportDocumentPersonnelDocument>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  report_access_type: XmlElem<string>;
};

type ViewUnsignedDocsReportDocument = XmlDocument & {
  TopElem: ViewUnsignedDocsReportDocumentTopElem;
  view_unsigned_docs_report: ViewUnsignedDocsReportDocumentTopElem;
  OnInit(): void;
};
