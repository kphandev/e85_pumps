import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Text, Box, Button, IconButton, Stack, Flex } from "@chakra-ui/react";
import { FiThumbsUp, FiThumbsDown, FiMessageSquare } from 'react-icons/fi';


// This component will render each individual comment
const Comment = ({ content, likes, dislikes, date }) => {
    return (
        <Box borderRadius="md" mb={2}>
            <Stack direction="row" spacing={4} align="center">
                <IconButton aria-label="Like" icon={<FiThumbsUp />} />
                <Text>{likes}</Text>
                <IconButton aria-label="Dislike" icon={<FiThumbsDown />} />
                <Text>{dislikes}</Text>
                <Text flex="1">{content}</Text>
                <Text fontSize="sm">{date}</Text>
            </Stack>
        </Box>
    );
};

const LocationComments = () => {
    const [comments, setComments] = useState(Array.from({ length: 30 }));

    // This function should contain the logic to fetch the next page of comments
    const fetchMoreComments = () => {
        setTimeout(() => {
            setComments([...comments].concat(Array.from({ length: 10 })))
        }, 1500);
    };

    return (
        <Flex direction="column" borderRadius="md" height="full">
            <Box flex={1}>
                <InfiniteScroll
                    dataLength={comments.length}
                    next={fetchMoreComments}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    height={350}
                >
                    {comments.map((comment, index) => (
                        <div>Comment #{index}</div>
                    ))}
                </InfiniteScroll>
            </Box>
            <Button leftIcon={<FiMessageSquare />} colorScheme="orange" w="full">
                Add Comment
            </Button>
        </Flex>
    );
};

export default LocationComments