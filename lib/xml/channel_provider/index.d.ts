type ChannelProviderDocumentTopElem = XmlTopElem &
AdminAccessBase &
WebVariablesBase & {
  Doc: ChannelProviderDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  root_function_name: XmlElem<string>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  provider_do(channelWVars: unknown): unknown;
};

type ChannelProviderDocument = XmlDocument & {
  TopElem: ChannelProviderDocumentTopElem;
  channel_provider: ChannelProviderDocumentTopElem;
  DocDesc(): string;
};
