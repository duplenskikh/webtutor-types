interface PriceDocumentServiceProvider {
  code: XmlElem<string>;
  provider_id: XmlElem<number, ProviderCatalogDocumentTopElem>;
  cost_value: XmlElem<number>;
  type_id: XmlElem<string, typeof common.service_provider_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
}

type PriceDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: PriceDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.successor_status_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  service_providers: XmlMultiElem<PriceDocumentServiceProvider>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PriceDocument = XmlDocument & {
  TopElem: PriceDocumentTopElem;
  price: PriceDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
