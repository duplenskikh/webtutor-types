type OutstaffTypeMaterialDocumentTopElem = XmlTopElem & {
  Doc: OutstaffTypeMaterialDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffTypeMaterialDocument = XmlDocument & {
  TopElem: OutstaffTypeMaterialDocumentTopElem;
  outstaff_type_material: OutstaffTypeMaterialDocumentTopElem;
};
