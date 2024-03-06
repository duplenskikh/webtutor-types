type UploadPackageDocumentTopElem = XmlTopElem & {
  Doc: UploadPackageDocument;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.package_types>;
  file_url: XmlElem<string>;
  package_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type UploadPackageDocument = XmlDocument & {
  TopElem: UploadPackageDocumentTopElem;
  upload_package: UploadPackageDocumentTopElem;
  DocDesc(): unknown;
};
