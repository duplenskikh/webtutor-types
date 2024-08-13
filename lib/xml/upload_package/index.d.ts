type UploadPackageDocumentTopElem = XmlTopElem & {
  Doc: UploadPackageDocument;
  code: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.package_types>;
  file_url: XmlElem<string | null>;
  package_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type UploadPackageDocument = XmlDocument & {
  TopElem: UploadPackageDocumentTopElem;
  upload_package: UploadPackageDocumentTopElem;
  DocDesc(): string;
};
