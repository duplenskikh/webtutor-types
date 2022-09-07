type OutstaffTypeMaterialDocumentTopElem = XmlTopElem & { Doc: OutstaffTypeMaterialDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type OutstaffTypeMaterialDocument = XmlDocument & {
  TopElem: OutstaffTypeMaterialDocumentTopElem;
};
