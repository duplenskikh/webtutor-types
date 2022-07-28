interface CertificateTypeDocumentQualification {
  qualification_id: XmlElem<number>;
}

interface CertificateTypeDocumentCertificateType {
  certificate_type_id: XmlElem<number>;
}

type CertificateTypeDocumentTopElem = XmlTopElem & { Doc: CertificateTypeDocument } & 
  CostCurrencyBase &
  AdminAccessBase &
  CustomElemsBase & {
  name: XmlElem<string>;
  code: XmlElem<string>;
  education_org_id: XmlElem<number>;
  duration: XmlElem<number>;
  forever: XmlElem<boolean>;
  required_quantity: XmlElem<number>;
  qualifications: XmlMultiElem<CertificateTypeDocumentQualification>;
  certificate_types: XmlMultiElem<CertificateTypeDocumentCertificateType>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type CertificateTypeDocument = XmlDocument & { TopElem: CertificateTypeDocumentTopElem; };
