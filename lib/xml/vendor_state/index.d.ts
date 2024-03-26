interface VendorStateDocumentCertificateType {
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  required_quantity: XmlElem<number>;
}

type VendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VendorStateDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  certificate_types: XmlMultiElem<VendorStateDocumentCertificateType>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type VendorStateDocument = XmlDocument & {
  TopElem: VendorStateDocumentTopElem;
  vendor_state: VendorStateDocumentTopElem;
  DocDesc(): string;
};
