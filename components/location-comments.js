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

const LocationComments = ({ data }) => {
    const [comments, setComments] = useState(data);
    const [hasMore, setHasMore] = useState(true); // You will need to manage this state based on when you want to stop loading more items

    // This function should contain the logic to fetch the next page of comments
    const fetchMoreComments = () => {
        // Fetch next comments and update the state
    };

    return (
        <Flex direction="column" borderRadius="md" height="full">
            <Box flex={1}>
                <InfiniteScroll
                    dataLength={comments.length}
                    next={fetchMoreComments}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <Stack spacing={8}>
                        {comments.map((comment, index) => (
                            <Comment key={index} {...comment} />
                        ))}
                    </Stack>
                </InfiniteScroll>
            </Box>
            <Button leftIcon={<FiMessageSquare />} colorScheme="orange" w="full" mt={4}>
                Add Comment
            </Button>
        </Flex>
    );
};

export default LocationComments