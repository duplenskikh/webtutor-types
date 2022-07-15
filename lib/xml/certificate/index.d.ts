interface CertificateView extends DescBase {
}

interface CertificateTopElem extends XmlTopElem<CertificateDocument>, PersonFillingBase, FileListBase, AdminAccessBase, CustomElemsBase {
  serial?: XmlElem<string>;
  number?: XmlElem<string>;
  type_id?: XmlElem<number>;
  type_name?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  qualification_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  delivery_date?: XmlElem<Date>;
  expire_date?: XmlElem<Date>;
  valid?: XmlElem<boolean>;
  signed_by_id?: XmlElem<number>;
  signed_by_name?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<CertificateView>;
  update_expire_date?(): any;
}

type CertificateDocument = XmlDocument<CertificateTopElem>;
