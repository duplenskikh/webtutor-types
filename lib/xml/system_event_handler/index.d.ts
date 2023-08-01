type SystemEventHandlerDocumentTopElem = XmlTopElem & { Doc: SystemEventHandlerDocument } & 
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  is_enabled: XmlElem<boolean>;
  system_event_id: XmlElem<number>;
  perfom_condition: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  last_system_event_id: XmlElem<number>;
  last_is_enabled: XmlElem<boolean>;
};

type SystemEventHandlerDocument = XmlDocument & {
  TopElem: SystemEventHandlerDocumentTopElem;
};
