import { Flex, Text } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./KanbanCard";

const KanbanLane = ({ title, items, color }) => {

    const { setNodeRef } = useDroppable({
        id: title,
    });

    const countItems = items?.length || 0;


    return (

        <Flex flex="3" padding="5" flexDirection="column" minH="10rem" height={
            countItems > 0 ? "auto" : "10rem"
        }>
            <Text fontSize="xl"  borderRadius="md" p={1} fontWeight="bold" bg={`${color}.500`} mb="2" color={
                 "white"
            }>
                {title}
            </Text>
            <Flex
                ref={setNodeRef}
                flex="1"
                bg={`${color}.100`}
                borderRadius="md"
                boxShadow="md"
                flexDirection="column"
                p={2}

            >
                {items.map(({title:item}, index) => (
                    
                    <KanbanCard key={index} title={item} index={index} parent={title} />
                ))}


            </Flex>
        </Flex>
    )
}

export default KanbanLane