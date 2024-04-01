type DlgEditColumnsDocumentTopElem = XmlTopElem &
ViewColumnsBase & {
  Doc: DlgEditColumnsDocument;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  view_type: XmlElem<string>;
  remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  remote_collection_mode: XmlElem<string>;
  view_type_env: XmlElem<unknown>;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
};

type DlgEditColumnsDocument = XmlDocument & {
  TopElem: DlgEditColumnsDocumentTopElem;
  dlg_edit_columns: DlgEditColumnsDocumentTopElem;
};
