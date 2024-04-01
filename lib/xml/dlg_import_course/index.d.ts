type DlgImportCourseDocumentTopElem = XmlTopElem & {
  Doc: DlgImportCourseDocument;
  wizard_step: XmlElem<number>;
  file_url: XmlElem<string>;
  zip_url: XmlElem<string>;
  course_name: XmlElem<string>;
  course_code: XmlElem<string>;
  file_charset: XmlElem<string>;
  file_suffix: XmlElem<string>;
  file_import: XmlElem<string>;
  file_import_suffix: XmlElem<string>;
  temp_url: XmlElem<string>;
  course_obj: XmlElem<unknown>;
  course_doc: XmlElem<unknown>;
  course(): unknown;
  course_import_selector: XmlElem<string>;
  last_course_id: XmlElem<number>;
  use_course_module: XmlElem<boolean>;
  copy_import_package: XmlElem<boolean>;
  unzip_import_package: XmlElem<boolean>;
  save_last_fields: XmlElem<boolean>;
  is_server: XmlElem<boolean>;
  report: XmlElem<string>;
  open_course(): unknown;
  unzip_course_package(): unknown;
};

type DlgImportCourseDocument = XmlDocument & {
  TopElem: DlgImportCourseDocumentTopElem;
  dlg_import_course: DlgImportCourseDocumentTopElem;
};
