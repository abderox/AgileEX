import { DndContext, rectIntersection } from "@dnd-kit/core";
import KanbanLane from "./KanbanLane";
import AddCard from "./AddCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";


const KanbanBoard = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([]);
    const [uItems, setuItems] = useState([]);
    const arrayLanes = [
        {
            title: "ToDo",
            items: todoItems,
            color: "red",
        },
        {
            title: "InProgress",
            items: inProgressItems,
            color: "yellow",
        },
        {
            title: "Done",
            items: doneItems,
            color: "green",
        },
        {
            title: "Unassigned",
            items: uItems,
            color: "gray",
        },
    ]

    const addNewCard = (title) => {
        setuItems([...uItems, { title }]);
    };
    return (
        <DndContext
            collisionDetection={rectIntersection}
            onDragEnd={(e) => {
                
                const container = e.over?.id;
                const title = e.active.data.current?.title || "";
                const index = e.active.data.current?.index || 0;
                const parent = e.active.data.current?.parent || "ToDo";

                if (container === "ToDo") {
                    setTodoItems([...todoItems, { title }]);
                } else if (container === "Done") {
                    setDoneItems([...doneItems, { title }]);
                } else if (container === "Unassigned") {
                    setuItems([...uItems, { title }]);
                } else {
                    setInProgressItems([...inProgressItems, { title }]);
                }
                if (parent === "ToDo") {
                    setTodoItems([
                        ...todoItems.slice(0, index),
                        ...todoItems.slice(index + 1),
                    ]);
                } else if (parent === "Done") {
                    setDoneItems([
                        ...doneItems.slice(0, index),
                        ...doneItems.slice(index + 1),
                    ]);
                } else if (parent === "Unassigned") {
                    setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
                } else {
                    setInProgressItems([
                        ...inProgressItems.slice(0, index),
                        ...inProgressItems.slice(index + 1),
                    ]);
                }
            }}
        >
            <Flex flexDirection="column">
                <AddCard addCard={addNewCard} />
                <Flex flex="3">
                    {arrayLanes.map(({ title, items, color }, index) => (
                        <KanbanLane
                            key={index}
                            title={title}
                            items={items}
                            color={color}
                        />
                    ))}
                </Flex>
            </Flex>
        </DndContext>
    );

}

export default KanbanBoard