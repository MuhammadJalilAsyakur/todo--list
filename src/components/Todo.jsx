import { Box, Checkbox, Text, Flex, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../Redux/action";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleChecked = () => dispatch(toggleTodo(todo.id));

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTodo(todo.id, editText));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => dispatch(deleteTodo(todo.id));

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  return (
    <Box mb={1} bgColor="lightblue" p={2}>
      {!isEditing ? (
        <Flex alignItems="center">
          <Checkbox
            onChange={handleChecked}
            colorScheme="teal"
            isChecked={checked}
          >
            <Text as={todo.completed && "del"}>{todo.text}</Text>
          </Checkbox>
          <IconButton
            icon={<EditIcon />}
            onClick={handleEdit}
            ml={2}
            variant="ghost"
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={handleDelete}
            ml={2}
            variant="ghost"
          />
        </Flex>
      ) : (
        <Flex alignItems="center">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <IconButton
            icon={<EditIcon />}
            onClick={handleEdit}
            ml={2}
            variant="ghost"
          />
        </Flex>
      )}
    </Box>
  );
};

export default Todo;