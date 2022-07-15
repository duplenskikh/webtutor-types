interface PriceServiceProvider {
  code?: XmlElem<string>;
  provider_id?: XmlElem<number>;
  cost_value?: XmlElem<number>;
  type_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface PriceTopElem extends XmlTopElem<PriceDocument>, FileListBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  service_providers?: XmlMultiElem<PriceServiceProvider>;
}

type PriceDocument = XmlDocument<PriceTopElem>;
