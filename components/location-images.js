import InfiniteScroll from "react-infinite-scroll-component";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useBreakpointValue, Flex, Image, Box, IconButton, Button, Icon } from "@chakra-ui/react";
import React, { useState } from 'react'

// TODO: use react-easy-infinite-scroll-hook for horizontal carousel
const DesktopImageCarousel = ({ images }) => {
    const scrollContainerRef = React.createRef();

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollContainerRef.current.scrollLeft -= 100; // Adjust the scrolling step if needed
        } else {
            scrollContainerRef.current.scrollLeft += 100; // Adjust the scrolling step if needed
        }
    };

    return (
        <Flex align="center">
            <IconButton
                aria-label="Scroll left"
                icon={<FiChevronLeft />}
                onClick={() => scroll('left')}
            />
            <Flex
                ref={scrollContainerRef}
                overflowX="auto"
                w="full"
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {images.map((image, index) => (
                    <Box key={index} minW="200px" mr={2}>
                        <Image alt={index}></Image>
                        {/* <Image src={image.src} alt={image.alt} borderRadius="10px" /> */}
                    </Box>
                ))}
            </Flex>
            <IconButton
                aria-label="Scroll right"
                icon={<FiChevronRight />}
                onClick={() => scroll('right')}
            />
        </Flex>
    );
};


const MobileImageGrid = ({ images, fetchMoreData }) => {
    return (
        <InfiniteScroll
            dataLength={images.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<p>Loading...</p>}
            height={350}
        >
            {images.map((image, index) => (
                <div>Image #{index}</div>
            ))}
        </InfiniteScroll>
    );
};


const LocationImages = ({ initialData }) => {
    const [images, setImages] = useState(Array.from({ length: 30 }));
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = async () => {
        setTimeout(() => {
            setImages([...images].concat(Array.from({ length: 10 })))
        }, 1500);
    }

    if (images.length > 0) {
        return (
            <Flex direction="column" borderRadius="md" height="full">
                <Box flex={1}>
                    <MobileImageGrid images={images} fetchMoreData={fetchMoreData}></MobileImageGrid>
                </Box>
                <Button colorScheme="orange" leftIcon={<Icon name="navigation" />}>Upload Image</Button>
            </Flex>
        )
    }
};

export default LocationImages