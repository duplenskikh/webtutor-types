type LibraryMaterialCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  /** Автор */
  author: XmlElem<string | null>;
  /** Раздел библиотеки */
  section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  /** Год издания */
  year: XmlElem<number | null>;
  isbn: XmlElem<string | null>;
  /** Состояние */
  state_id: XmlElem<number | null, typeof common.library_states>;
  /** Имеется цифровой формат */
  has_digital: XmlElem<boolean>;
  /** Имеется физический носитель */
  has_physical: XmlElem<boolean>;
  /** Разрешить скачивание файла */
  allow_download: XmlElem<boolean>;
  /** Разрешить самостоятельный просмотр материала */
  allow_self_viewing: XmlElem<boolean>;
  /** Видео сконвертировано для просмотра онлайн */
  online_video_prepared: XmlElem<boolean>;
  /** Вид */
  library_material_type_id: XmlElem<number | null, LibraryMaterialTypeCatalogDocumentTopElem>;
  /** Форматы */
  library_material_formats: XmlElem<string | null>;
  external_id: XmlElem<string | null>;
  /** Файл */
  file_name: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Новым отзывам требуется подтверждение администратора */
  is_need_admin_approval: XmlElem<boolean>;
  /** Закрыт для новых отзывов */
  is_closed: XmlElem<boolean>;
  /** Разрешить самостоятельный просмотр материала */
  image: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Значения карты знаний */
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  /** Эксперты */
  experts: XmlElem<string | null>;
  previous_version_object_id: XmlElem<number | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  /** Статус */
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  OnBuild(): void;
};
