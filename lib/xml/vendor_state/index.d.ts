interface VendorStateDocumentCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  required_quantity: XmlElem<number | null>;
}

type VendorStateDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VendorStateDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  certificate_types: XmlMultiElem<VendorStateDocumentCertificateType | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type VendorStateDocument = XmlDocument & {
  TopElem: VendorStateDocumentTopElem;
  vendor_state: VendorStateDocumentTopElem;
  DocDesc(): string;
};
