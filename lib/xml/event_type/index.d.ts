type EventTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: EventTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  simpl_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  online: XmlElem<boolean>;
  auto_start: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean | null>;
  can_use_microphone: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
};

type EventTypeDocument = XmlDocument & {
  TopElem: EventTypeDocumentTopElem;
  event_type: EventTypeDocumentTopElem;
  DocDesc(): string;
};
