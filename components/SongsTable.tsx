import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Tbody, Th, IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

import { formatDate, formatTime } from "../lib/formatters";

const SongsTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box paddingX="2rem" marginBottom="2rem">
        <Box marginBottom="2rem">
          <IconButton
            colorScheme="green"
            aria-label="Play"
            size="lg"
            isRound
            icon={<BsFillPlayFill fontSize="2rem" />}
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th><AiOutlineClockCircle /></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              songs.map((song, index) => (
                <Tr
                  key={song.id}
                  sx={{
                    transition: 'all .3s',
                    '&:hover': {
                      bg: 'rgba(255,255,255,.1)'
                    }
                  }}
                  cursor="cursor"
                >
                  <Td>{index + 1}</Td>
                  <Td>{song.name}</Td>
                  <Td>{formatDate(song.createdAt)}</Td>
                  <Td>{formatTime(song.duration)}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default SongsTable;
