type ViewGlobalSettingsDocumentTopElem = XmlTopElem & {
  Doc: ViewGlobalSettingsDocument;
  settings: XmlElem<GlobalSettingsBase>;
  lists: XmlElem<ExchangeListsBase>;
  save_global_settings(): unknown;
};

type ViewGlobalSettingsDocument = XmlDocument & {
  TopElem: ViewGlobalSettingsDocumentTopElem;
  view_global_settings: ViewGlobalSettingsDocumentTopElem;
};
