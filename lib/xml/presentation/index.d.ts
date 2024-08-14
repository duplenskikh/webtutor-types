interface PresentationDocumentShape {
  id: XmlElem<string | null>;
  /** Слайд */
  slide_id: XmlElem<string | null>;
  json: XmlElem<string | null>;
}

type PresentationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: PresentationDocument;
  access: XmlElem<AccessDocBase | null>;
  /** Файл */
  file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Мероприятие */
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  vclass_setting_id: XmlElem<number | null, VclassSettingCatalogDocumentTopElem>;
  /** Слайд */
  current_slide_id: XmlElem<string | null>;
  shapes: XmlMultiElem<PresentationDocumentShape | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type PresentationDocument = XmlDocument & {
  TopElem: PresentationDocumentTopElem;
  presentation: PresentationDocumentTopElem;
  DocDesc(): string;
};
