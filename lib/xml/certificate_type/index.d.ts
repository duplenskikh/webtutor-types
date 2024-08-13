interface CertificateTypeDocumentQualification {
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
}

interface CertificateTypeDocumentCertificateType {
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
}

type CertificateTypeDocumentTopElem = XmlTopElem &
CostCurrencyBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CertificateTypeDocument;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  forever: XmlElem<boolean>;
  required_quantity: XmlElem<number | null>;
  qualifications: XmlMultiElem<CertificateTypeDocumentQualification | null>;
  certificate_types: XmlMultiElem<CertificateTypeDocumentCertificateType | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CertificateTypeDocument = XmlDocument & {
  TopElem: CertificateTypeDocumentTopElem;
  certificate_type: CertificateTypeDocumentTopElem;
  DocDesc(): string;
};
