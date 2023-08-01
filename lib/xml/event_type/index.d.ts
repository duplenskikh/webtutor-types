type EventTypeDocumentTopElem = XmlTopElem & { Doc: EventTypeDocument } &
CustomElemsBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  custom_web_template_id: XmlElem<number>;
  simpl_custom_web_template_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type EventTypeDocument = XmlDocument & {
  TopElem: EventTypeDocumentTopElem;
};
