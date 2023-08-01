type OrgVendorStateDocumentTopElem = XmlTopElem & { Doc: OrgVendorStateDocument } &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  vendor_status_id: XmlElem<number>;
  education_org_id: XmlElem<number>;
  org_id: XmlElem<number>;
  vendor_status_type_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  recertification_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type OrgVendorStateDocument = XmlDocument & {
  TopElem: OrgVendorStateDocumentTopElem;
};
