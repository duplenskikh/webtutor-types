type OrgVendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OrgVendorStateDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  vendor_status_id: XmlElem<number, VendorStateCatalogDocumentTopElem>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  vendor_status_type_id: XmlElem<string, typeof common.vendor_status_types>;
  start_date: XmlElem<Date>;
  recertification_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type OrgVendorStateDocument = XmlDocument & {
  TopElem: OrgVendorStateDocumentTopElem;
  org_vendor_state: OrgVendorStateDocumentTopElem;
  DocDesc(): unknown;
};
