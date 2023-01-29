import { Flex, Text, Button, Input, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";

const AddCard = ({ addCard }) => {

    const [title, setTitle] = useState("");


    return (

        <Flex flex="3" padding="5"  >
            
            <Flex
                flex="1"
                bg="white"
                borderRadius="md"
                boxShadow="md"
                flexDirection="row"
                p={2}
          
            >
                <Input
                 mt={2}
                    placeholder="Card Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
               
                <Button
                    ml={1}
                    mt={2}
                    colorScheme="blue"
                    onClick={() => {
                        addCard(title);
                        setTitle("");
                    }}
                >
                    Add Card
                </Button>
            </Flex>
        </Flex>
    )
}

export default AddCard;