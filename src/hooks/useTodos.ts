import { useSelector } from "react-redux";
import { selectTodosByFilter } from "@/store/todo/selectors";
import { FilterType } from "@/types";

export const useFilteredTodos = (filter: FilterType) => {
  return useSelector(selectTodosByFilter(filter));
};
