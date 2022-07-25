import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ContentToDo } from '../../components/ContentToDo';
import { Header } from '../../components/Header';

export function Layout() {
  return (
    <>
      <Header />
      <Stack bg="#1A1A1A" h="100vh">
        <Flex direction="column" w="50vw" mx="auto" mt="-20px" gap={2}>
          <Box display="flex" flexDirection="row" gap={2} h="50px">
            <Input
              color="gray.100"
              bg="#262626"
              placeholder="Adicione uma nova tarefa..."
              _placeholder={{ opacity: 1, color: 'gray.300' }}
              border="none"
              h="100%"
              focusBorderColor="purpleDark"
            />
            <Button
              gap={2}
              color="gray.100"
              bg="blueDark"
              _hover={{ bg: 'blue' }}
              h="100%"
            >
              Criar <AddIcon w={3} h={3} />
            </Button>
          </Box>
          <ContentToDo />
        </Flex>
      </Stack>
    </>
  );
}
