import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Input, Spacer, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Item } from '../Item';
import { v1 as uuid } from 'uuid';

const startTasks = [
  {
    id: '5e1ff950-0e36-11ed-92c0-4dc2a1ad7bcc',
    isCompleted: false,
    content: 'conteudo ummmmmm',
  },
  {
    id: '5e1ff951-0e36-11ed-92c0-4dc2a1ad7bcc',
    isCompleted: true,
    content: 'conteudo doiiiiisss',
  },
];

export function ContentToDo() {
  const [tasks, setTasks] = useState<T>(startTasks);
  const [inputText, setInputText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };
  function handleCreateTask() {
    setTasks([
      ...tasks,
      { id: uuid(), isCompleted: false, content: inputText },
    ]);
    console.log(tasks);
  }
  return (
    <>
      <Box display="flex" flexDirection="row" gap={2} h="50px">
        <Input
          color="gray.100"
          bg="#262626"
          placeholder="Adicione uma nova tarefa..."
          _placeholder={{ opacity: 1, color: 'gray.300' }}
          border="none"
          h="100%"
          focusBorderColor="purpleDark"
          onChange={handleChange}
        />
        <Button
          gap={2}
          color="gray.100"
          bg="blueDark"
          _hover={{ bg: 'blue' }}
          h="100%"
          onClick={handleCreateTask}
        >
          Criar <AddIcon w={3} h={3} />
        </Button>
      </Box>
      <Flex direction="column" mt={10}>
        <Flex>
          <Box display="flex" flexDir="row">
            <Text fontWeight="bold" color="blue">
              Tarefas criadas{' '}
            </Text>
            <Box
              ml={2}
              bg="#333"
              borderRadius="50%"
              px={2}
              color="#fff"
              fontWeight="bold"
            >
              {tasks.length}
            </Box>
          </Box>
          <Spacer />
          <Box display="flex" flexDir="row">
            <Text fontWeight="bold" color="blue">
              Concluídas{' '}
            </Text>
            <Box
              ml={2}
              bg="#333"
              borderRadius="50%"
              px={2}
              color="#fff"
              fontWeight="bold"
            >
              {tasks.filter((task) => task.isCompleted === true).length}
            </Box>
          </Box>
        </Flex>
        {tasks.map((task) => {
          return (
            <Item
              key={task.id}
              isCompleted={task.isCompleted}
              content={task.content}
            />
          );
        })}
      </Flex>
    </>
  );
}
