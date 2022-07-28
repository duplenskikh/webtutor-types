interface PresentationDocumentShape {
  id?: XmlElem<string>;
  slide_id?: XmlElem<string>;
  json?: XmlElem<string>;
}

type PresentationDocumentTopElem = XmlTopElem & { Doc: PresentationDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  access?: XmlElem<AccessDocBase>;
  file_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  vclass_setting_id?: XmlElem<number>;
  current_slide_id?: XmlElem<string>;
  shapes?: XmlMultiElem<PresentationDocumentShape>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PresentationDocument = XmlDocument & { TopElem: PresentationDocumentTopElem; };
