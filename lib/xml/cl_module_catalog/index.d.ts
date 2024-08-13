type ClModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  resource_url: XmlElem<string | null>;
  category: XmlElem<string | null>;
  category_label: XmlElem<string | null>;
  slide_width: XmlElem<number | null>;
  slide_height: XmlElem<number | null>;
  is_template: XmlElem<boolean | null>;
  stamp: XmlElem<number | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
