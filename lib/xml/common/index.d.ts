
interface CommonRequestStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonEventStatusType {
  id: string;
  name: string;
  text_color: string;
  bk_color: string;
}

interface CommonLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
  lpe_color: XmlElem<string>;
}

interface CommonResourceType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  ext: XmlElem<string>;
  is_media: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
}

interface CommonExchangeObjectType {
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  title: XmlElem<string>;
  web_title: XmlElem<string>;
  web_template: XmlElem<string>;
  web_const: XmlElem<string>;
  is_hier: XmlElem<boolean>;
  is_custom: XmlElem<boolean>;
  form_url: XmlElem<string>;
  form_type: XmlElem<number>;
  max_records_num: XmlElem<number>;
  ft_index: XmlElem<boolean>;
}

interface CommonEducationLearningState {
  id: XmlElem<number>;
  name: XmlElem<string>;
  short_descriptor: XmlElem<string>;
  long_descriptor: XmlElem<string>;
  text_color: XmlElem<string>;
}

interface CommonCareerReserveStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
  bk_color: XmlElem<string>;
}

interface CommonCareerReserveTasksType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface CommonLearningTaskStatusType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

declare namespace common {
  const request_status_types: XmlMultiElem<CommonRequestStatusType>;
  const event_status_types: XmlMultiElem<CommonEventStatusType>;
  const learning_states: XmlMultiElem<CommonLearningState>;
  const resource_types: XmlMultiElem<CommonResourceType>;
  const exchange_object_types: XmlMultiElem<CommonExchangeObjectType>;
  const education_learning_states: XmlMultiElem<CommonEducationLearningState>;
  const career_reserve_status_types: XmlMultiElem<CommonCareerReserveStatusType>;
  const career_reserve_tasks_types: XmlMultiElem<CommonCareerReserveTasksType>;
  const learning_task_status_types: XmlMultiElem<CommonLearningTaskStatusType>;
}
