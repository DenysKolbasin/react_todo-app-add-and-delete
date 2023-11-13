import React, { useState } from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
  onDelete: (todoId: number) => void;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // const handleStatusChange = (todoId: number, completed: boolean) => {
  //   const updatedTodo = todos.find((todo) => todo.id === todoId);

  //   if (updatedTodo) {
  //     const updatedTodoWithNewStatus = { ...updatedTodo, completed };

  //     onUpdate(updatedTodoWithNewStatus);
  //   }
  // };

  return (
    <div
      data-cy="Todo"
      key={todo.id}
      className={cn('todo', { completed: todo.completed })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
        // onChange={(e) => handleStatusChange(todo.id, e.target.checked)}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => {
          setIsLoading(true);
          onDelete(todo.id);
        }}
      >
        ×
      </button>

      {isLoading && (
        <div data-cy="TodoLoader" className="modal overlay is-active">
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      )}
    </div>
  );
};
