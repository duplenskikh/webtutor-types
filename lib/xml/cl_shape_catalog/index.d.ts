type ClShapeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  category_label: XmlElem<string>;
  type: XmlElem<string>;
  type_name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
