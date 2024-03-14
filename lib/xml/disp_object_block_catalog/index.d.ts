interface BlockObjectsBaseObject {
  id: XmlElem<number>;
  obj_title: XmlElem<string>;
  category: XmlElem<string>;
  custom_flag: XmlElem<boolean>;
}

interface BlockObjectsBase {
  objects: XmlMultiElem<BlockObjectsBaseObject>;
}

type DispObjectBlockCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string>;
  request_type: XmlElem<BlockObjectsBase>;
  response_type: XmlElem<BlockObjectsBase>;
  object_data_type: XmlElem<BlockObjectsBase>;
  doc_type: XmlElem<BlockObjectsBase>;
  custom_report: XmlElem<BlockObjectsBase>;
};
