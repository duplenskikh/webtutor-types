interface VendorStateDocumentCertificateType {
  certificate_type_id: XmlElem<number>;
  required_quantity: XmlElem<number>;
}

type VendorStateDocumentTopElem = XmlTopElem & { Doc: VendorStateDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  education_org_id: XmlElem<number>;
  certificate_types: XmlMultiElem<VendorStateDocumentCertificateType>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type VendorStateDocument = XmlDocument & { TopElem: VendorStateDocumentTopElem; };
