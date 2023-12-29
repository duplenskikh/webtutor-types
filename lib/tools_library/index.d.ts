declare namespace tools_library {
  function string_is_null_or_empty(value: unknown): value is null | undefined | "";

  function get_source_types(fileUrl: string, fileType?: string | null): string[];

  function import_resource_by_source_type(
    sourceTypeId: number,
    resourceId: number,
    libraryMaterialId: number,
    auxName?: string | null
  ): ReturnType<typeof import_file_by_source_type>;

  function import_file_by_source_type(
    sourceTypeId: number,
    fileUrl: string,
    libraryMaterialId: number,
    auxName?: string | null
  ): unknown;

  type WordToHTMLResult = {
    html: string;
    datadir: string;
  };

  function word_to_html(fileUrl: string, useCutter: boolean, setTags: boolean): WordToHTMLResult;

  function pdf_to_html(fileUrl: string, useCutter: boolean, setTags: boolean): WordToHTMLResult;

  function convert_to_simple_html(
    html: string,
    sourceFile: string,
    applyGlobalCutter: boolean,
    setTags: boolean
  ): string[] | string;

  function get_article_html(articleId: number, articleTopElem: ArticleDocumentTopElem, flush: boolean): string;

  type HealHTMLResult = {
    html: string;
    pairs: string;
  };

  function heal_html(partProcess: string, regexp: Websoft.RegExp.RegExp): HealHTMLResult;

  function slice_pages(symbolLength: number, fatText: string): string[] | string;

  function slice_by_global_cutter(fatHtml: string): string[];

  function get_styles(html: string, path: string): string;

  function unravel_class(className: string, tagName: string, classes: string): string;

  function preprocess_html(htmlParts: string[]): string[];

  function ui_pack_import(): void;

  function old_import_book_from_word(bookId: number, fileUrl: string): void;

  type GetLibraryObjectsListResultItem = {
    id: number | string;
    name: string;
    parent_id: number | string;
    hasChildren: boolean;
    icon: string;
  };

  function GetLibraryObjectsList(
    rootId: number,
    personId: number,
    session: Session,
    sectionSortField: string,
    curLngId: string,
    addAll: boolean,
    extrafields: boolean
  ): GetLibraryObjectsListResultItem[];

  function convert_pdf_libratry_material(materialId: number): BookDocument;

  function check_cmi5_support(objectId: number): boolean;

  function append_path(folder: string, path: string): string;
}
