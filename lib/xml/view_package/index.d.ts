interface ViewPackageDocumentDownloadPackage extends DownloadPackageBase, DownloadPackageLogBase {
  selected: XmlElem<boolean>;
  selected_lists: XmlElem<boolean>;
  selected_deleted_objects: XmlElem<boolean>;
  selected_objects: XmlElem<boolean>;
  temp_package_url: XmlElem<string>;
  application_code: XmlElem<string>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
}

type ViewPackageDocumentTopElem = XmlTopElem & {
  Doc: ViewPackageDocument;
  error: XmlElem<number>;
  error_text: XmlElem<string>;
  package_url: XmlElem<string>;
  package_type: XmlElem<string>;
  temp_package_url: XmlElem<string>;
  download_packages: XmlMultiElem<ViewPackageDocumentDownloadPackage>;
  create_temp_dir(zipUrl: string): unknown;
  process_package(): unknown;
  process_package_objects(updateUrl: string, packageId: string): unknown;
};

type ViewPackageDocument = XmlDocument & {
  TopElem: ViewPackageDocumentTopElem;
  view_package: ViewPackageDocumentTopElem;
};
