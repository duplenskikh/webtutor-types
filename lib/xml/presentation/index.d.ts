interface PresentationShape {
  id?: XmlElem<string>;
  slide_id?: XmlElem<string>;
  json?: XmlElem<string>;
}

interface PresentationTopElem extends XmlTopElem<PresentationDocument>, ObjectCodeNameBase, AdminAccessBase {
  file_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  vclass_setting_id?: XmlElem<number>;
  current_slide_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  shapes?: XmlMultiElem<PresentationShape>;
}

type PresentationDocument = XmlDocument<PresentationTopElem>;
