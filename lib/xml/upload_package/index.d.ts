interface UploadPackageTopElem extends XmlTopElem<UploadPackageDocument> {
  code?: XmlElem<string>;
  type?: XmlElem<string>;
  file_url?: XmlElem<string>;
  package_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type UploadPackageDocument = XmlDocument<UploadPackageTopElem>;
