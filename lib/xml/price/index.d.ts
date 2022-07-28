interface PriceDocumentServiceProvider {
  code?: XmlElem<string>;
  provider_id?: XmlElem<number>;
  cost_value?: XmlElem<number>;
  type_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

type PriceDocumentTopElem = XmlTopElem & { Doc: PriceDocument } & 
  FileListBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  service_providers?: XmlMultiElem<PriceDocumentServiceProvider>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PriceDocument = XmlDocument & { TopElem: PriceDocumentTopElem; };
