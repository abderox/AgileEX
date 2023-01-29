import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./KanbanCard";

const KanbanLane = ({ title, items }) => {

    const { setNodeRef } = useDroppable({
        id: title,
    });



    return (

        <Flex flex="3" padding="5" flexDirection="column" minH="10rem">
            <Text fontSize="xl" fontWeight="bold" mb="2">
                {title}
            </Text>
            <Flex
                ref={setNodeRef}
                flex="1"
                bg="white"
                borderRadius="md"
                boxShadow="md"
                flexDirection="column"
                p={2}
                overflowY="auto"
            >
                {items.map((item, index) => (
                    <KanbanCard key={index} title={item} index={index} parent={title} />
                ))}


            </Flex>
        </Flex>
    )
}

export default KanbanLane