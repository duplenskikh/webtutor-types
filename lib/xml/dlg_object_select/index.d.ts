interface DlgObjectSelectDocumentValue {
  key: XmlElem<number>;
  key_str: XmlElem<string>;
  key_name: XmlElem<string>;
  key_obj: XmlElem<unknown>;
  org_id: XmlElem<number>;
}

interface DlgObjectSelectDocumentButton {
  name: XmlElem<string>;
  title: XmlElem<string>;
  type: XmlElem<string>;
  submit_type: XmlElem<string>;
}

type DlgObjectSelectDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase &
WebVariablesBase & {
  Doc: DlgObjectSelectDocument;
  object_id: XmlElem<number>;
  object_str: XmlElem<string>;
  object_name: XmlElem<string>;
  object_obj: XmlElem<unknown>;
  org_id: XmlElem<number>;
  multi_select: XmlElem<boolean>;
  values: XmlMultiElem<DlgObjectSelectDocumentValue>;
  value_array: XmlElem<unknown>;
  variant: XmlElem<unknown>;
  variant_primary_key: XmlElem<string>;
  use_common_columns: XmlElem<boolean>;
  dialog_title: XmlElem<string>;
  disp_dlg_new_button: XmlElem<boolean>;
  can_be_empty: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  role_name: XmlElem<string>;
  remote_collection_id: XmlElem<number, RemoteCollectionCatalogDocumentTopElem>;
  remote_collection_mode: XmlElem<string>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  disp_mode: XmlElem<string>;
  disp_tree_selector: XmlElem<boolean>;
  disp_hier_view: XmlElem<boolean>;
  tree_catalog: XmlElem<string>;
  buttons: XmlMultiElem<DlgObjectSelectDocumentButton>;
  disp_roles(): unknown;
};

type DlgObjectSelectDocument = XmlDocument & {
  TopElem: DlgObjectSelectDocumentTopElem;
  dlg_object_select: DlgObjectSelectDocumentTopElem;
  OnInit(): void;
};
