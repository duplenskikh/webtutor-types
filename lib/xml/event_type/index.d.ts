type EventTypeDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: EventTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  simpl_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  online: XmlElem<boolean>;
  auto_start: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean | null>;
  can_use_microphone: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
};

type EventTypeDocument = XmlDocument & {
  TopElem: EventTypeDocumentTopElem;
  event_type: EventTypeDocumentTopElem;
  DocDesc(): string;
};
