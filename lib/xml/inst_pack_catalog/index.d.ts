type InstPackCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  lng_id: XmlElem<string>;
  url: XmlElem<string>;
  package_date: XmlElem<Date>;
  type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  is_demo: XmlElem<boolean>;
  always_update_objects: XmlElem<boolean>;
  processed: XmlElem<boolean>;
  process_date: XmlElem<Date>;
  process_log: XmlElem<string>;
};
