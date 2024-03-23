type EventTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: EventTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  simpl_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  online: XmlElem<boolean>;
  auto_start: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type EventTypeDocument = XmlDocument & {
  TopElem: EventTypeDocumentTopElem;
  event_type: EventTypeDocumentTopElem;
  DocDesc(): string;
};
