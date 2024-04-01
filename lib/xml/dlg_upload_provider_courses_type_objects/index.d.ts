interface DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjectsObjectTypeObject {
  id: XmlElem<number>;
  name: XmlElem<string>;
  can_upload: XmlElem<boolean>;
  checked: XmlElem<boolean>;
}

interface DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjectsObjectType {
  type_id: XmlElem<string, typeof common.exchange_object_types>;
  can_upload: XmlElem<boolean>;
  checked: XmlElem<boolean>;
  objects: XmlMultiElem<DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjectsObjectTypeObject>;
}

interface DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjects {
  provider_courses_type_id: XmlElem<number>;
  object_types: XmlMultiElem<DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjectsObjectType>;
}

type DlgUploadProviderCoursesTypeObjectsDocumentTopElem = XmlTopElem & {
  Doc: DlgUploadProviderCoursesTypeObjectsDocument;

};

type DlgUploadProviderCoursesTypeObjectsDocument = XmlDocument & {
  TopElem: DlgUploadProviderCoursesTypeObjectsDocumentTopElem;
  dlg_upload_provider_courses_type_objects: DlgUploadProviderCoursesTypeObjectsDocumentTopElem;
  wtv_dlg_upload_provider_courses_type_objects: XmlElem<DlgUploadProviderCoursesTypeObjectsDocumentWtvDlgUploadProviderCoursesTypeObjects>;
};
