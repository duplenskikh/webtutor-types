type PriceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.successor_status_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  OnBuild(): void;
};
