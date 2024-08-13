type OrgVendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OrgVendorStateDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  vendor_status_id: XmlElem<number | null, VendorStateCatalogDocumentTopElem>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  start_date: XmlElem<Date | null>;
  recertification_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OrgVendorStateDocument = XmlDocument & {
  TopElem: OrgVendorStateDocumentTopElem;
  org_vendor_state: OrgVendorStateDocumentTopElem;
  DocDesc(): string;
};
