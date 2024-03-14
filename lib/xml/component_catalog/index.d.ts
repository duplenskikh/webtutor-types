interface ComponentsDocumentItem {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  path: XmlElem<string>;
}

interface ComponentsDocumentChangeLog {
  id: XmlElem<string>;
  version: XmlElem<string>;
  version_last: XmlElem<string>;
  update_date: XmlElem<Date>;
}

type ComponentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string>;
  name: XmlElem<string>;
  version: XmlElem<string>;
  version_last: XmlElem<string>;
  update_date: XmlElem<Date>;
  path: XmlElem<string>;
  items: XmlMultiElem<ComponentsDocumentItem>;
  change_logs: XmlMultiElem<ComponentsDocumentChangeLog>;
};
