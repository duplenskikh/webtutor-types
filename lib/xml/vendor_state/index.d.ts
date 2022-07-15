interface VendorStateCertificateType {
  certificate_type_id?: XmlElem<number>;
  required_quantity?: XmlElem<number>;
}

interface VendorStateView extends DescBase {
}

interface VendorStateTopElem extends XmlTopElem<VendorStateDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  certificate_types?: XmlMultiElem<VendorStateCertificateType>;
  view?: XmlElem<VendorStateView>;
}

type VendorStateDocument = XmlDocument<VendorStateTopElem>;
