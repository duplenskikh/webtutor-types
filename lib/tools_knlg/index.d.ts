declare namespace tools_knlg {
  function activate_learning_task(obj: {
    person_id: number,
    learning_task_id: number,
    start_date: Date,
    plan_start_date: Date,
    expert_id: number
    education_plan_id: number
  }): { doc_learning_task_result: unknown };
}
