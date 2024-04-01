type ViewPluginsDocumentTopElem = XmlTopElem &
MsViewCatalogBase & {
  Doc: ViewPluginsDocument;
  select_type_id: XmlElem<string>;
  view_part_selector: XmlElem<number>;
  install_pack(fldPackElem: unknown): unknown;
  update_pack_list(): unknown;
};

type ViewPluginsDocument = XmlDocument & {
  TopElem: ViewPluginsDocumentTopElem;
  view_plugins: ViewPluginsDocumentTopElem;
  OnInit(): void;
};
