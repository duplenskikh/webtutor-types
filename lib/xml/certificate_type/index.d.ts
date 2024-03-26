interface CertificateTypeDocumentQualification {
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
}

interface CertificateTypeDocumentCertificateType {
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
}

type CertificateTypeDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateTypeDocument;
  name: XmlElem<string>;
  code: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  forever: XmlElem<boolean>;
  required_quantity: XmlElem<number>;
  qualifications: XmlMultiElem<CertificateTypeDocumentQualification>;
  certificate_types: XmlMultiElem<CertificateTypeDocumentCertificateType>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CertificateTypeDocument = XmlDocument & {
  TopElem: CertificateTypeDocumentTopElem;
  certificate_type: CertificateTypeDocumentTopElem;
  DocDesc(): string;
};
