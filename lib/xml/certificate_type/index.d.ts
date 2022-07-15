interface CertificateTypeQualification {
  qualification_id?: XmlElem<number>;
}

interface CertificateTypeCertificateType {
  certificate_type_id?: XmlElem<number>;
}

interface CertificateTypeView extends DescBase {
}

interface CertificateTypeTopElem extends XmlTopElem<CertificateTypeDocument>, CostCurrencyBase, AdminAccessBase, CustomElemsBase {
  name?: XmlElem<string>;
  code?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  forever?: XmlElem<boolean>;
  required_quantity?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  qualifications?: XmlMultiElem<CertificateTypeQualification>;
  certificate_types?: XmlMultiElem<CertificateTypeCertificateType>;
  view?: XmlElem<CertificateTypeView>;
}

type CertificateTypeDocument = XmlDocument<CertificateTypeTopElem>;
