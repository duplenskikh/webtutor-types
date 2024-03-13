declare namespace tools_soc {
  function get_like_arrs(iObjectIDParam: number, iUserIDParam: number): unknown;
  function get_social_object(Env: unknown, iCommentsParam: number): unknown;
  function get_social_object_access(iObjectIDParam: number, sObjectNameParam: string): unknown;
  function create_like(Env: unknown, iWeightParam: number): unknown;
  function obtain_individual_blog(iObjectIDParam: number, teObjectParam: unknown): unknown;
  function create_individual_blog_entry(sTypeParam: string, iObjectIDParam: number, iUserIDParam: number, sTextParam: string, iTargetIDParam: number, teObjectParam: unknown, teUserParam: unknown, teTargetParam: unknown, arrAccessGroupsParam: unknown): unknown;
  function get_user_soc_groups(curUserID: number, curUser: CurUser): unknown;
  function set_social_wall_item(teFormTarget: unknown, Env: unknown, arrItemsParam: unknown, arrLikesParam: unknown): unknown;
  function get_social_wall_arrs(Session: Session, arrItemListParam: unknown, iBlogObjectIDParam: number, sBlogObjectNameParam: string, dtMaxDateParam: Date, arrGroupsParam: unknown, arrFiltersParam: unknown): unknown;
  function get_social_wall_object(Session: Session, arrItemListParam: unknown, iBlogObjectIDParam: number, sBlogObjectNameParam: string, arrGroupsParam: unknown, arrFiltersParam: unknown): unknown;
  function get_social_item_object(Session: Session, iWallItemIDParam: number, teObject: unknown): unknown;
  function obtain_files_from_request(Request: unknown, oTargetDocParam: unknown): unknown;
  function obtain_tags_from_request(Request: unknown, oTargetDocParam: unknown): unknown;
}
