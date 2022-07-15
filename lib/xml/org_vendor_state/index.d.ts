interface OrgVendorStateView extends DescBase {
}

interface OrgVendorStateTopElem extends XmlTopElem<OrgVendorStateDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  vendor_status_id?: XmlElem<number>;
  education_org_id?: XmlElem<number>;
  org_id?: XmlElem<number>;
  vendor_status_type_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  recertification_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<OrgVendorStateView>;
}

type OrgVendorStateDocument = XmlDocument<OrgVendorStateTopElem>;
