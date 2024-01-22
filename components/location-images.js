import InfiniteScroll from "react-infinite-scroll-component";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useBreakpointValue, Flex, Image, Box, IconButton, SimpleGrid } from "@chakra-ui/react";
import React from 'react'

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
                    <Box key={index} minW="120px" mr={2}>
                        <Image src={image.src} alt={image.alt} />
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


const MobileImageGrid = ({ images, fetchMoreImages }) => {
    return (
        <InfiniteScroll
            dataLength={images.length}
            next={fetchMoreImages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <SimpleGrid columns={2} spacing={2}>
                {images.map((image, index) => (
                    <Box key={index} h="120px">
                        <Image src={image.src} alt={image.alt} objectFit="cover" />
                    </Box>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    );
};


const LocationImages = ({ data }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const fetchMore = () => {
        loadMoreImages(); // Your logic to load more images goes here
    };

    if (data) {
        if (isMobile) {
            return <MobileImageGrid images={data} fetchMoreImages={fetchMore} />;
        } else {
            return <DesktopImageCarousel images={data} />;
        }
    }

};

export default LocationImages