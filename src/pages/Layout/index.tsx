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
          <ContentToDo />
        </Flex>
      </Stack>
    </>
  );
}
