interface ProviderView extends DescBase {
}

interface ProviderTopElem extends XmlTopElem<ProviderDocument>, CustomElemsBase, FileListBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  provider_product?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  dimension_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<ProviderView>;
}

type ProviderDocument = XmlDocument<ProviderTopElem>;
