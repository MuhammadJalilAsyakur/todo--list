import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            value={value}
            placeholder="Add Todo"
            onChange={handleInput}
            borderRadius={16}
          />
        </FormControl>
      </Flex>
      <Flex justify="center" mt={4}>
        <Button colorScheme="teal" type="submit" borderRadius={16}>
          Add Todo
        </Button>
      </Flex>
    </form>
  );
};

export default AddTodo;
