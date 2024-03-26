type ChannelProviderDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: ChannelProviderDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  root_function_name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  provider_do(channelWVars: unknown): unknown;
};

type ChannelProviderDocument = XmlDocument & {
  TopElem: ChannelProviderDocumentTopElem;
  channel_provider: ChannelProviderDocumentTopElem;
  DocDesc(): string;
};
