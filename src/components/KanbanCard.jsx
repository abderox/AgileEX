import React from 'react'
import { Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const KanbanCard = ({ title,index,parent }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id: `card-${title}`,
        data: {
            title,
            index,
            parent
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };


    return (
        <Flex
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            bg="white"
            p={2}
            mt={1}
            borderRadius="md"
            boxShadow="md"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            cursor="grab"
        >
            <Text>{title}</Text>
        </Flex>

    )
}

export default KanbanCard;