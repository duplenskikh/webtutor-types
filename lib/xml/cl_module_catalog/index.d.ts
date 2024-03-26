type ClModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  cl_course_id: XmlElem<number, ClCourseCatalogDocumentTopElem>;
  resource_url: XmlElem<string>;
  category: XmlElem<string>;
  category_label: XmlElem<string>;
  slide_width: XmlElem<number>;
  slide_height: XmlElem<number>;
  is_template: XmlElem<boolean>;
  stamp: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
