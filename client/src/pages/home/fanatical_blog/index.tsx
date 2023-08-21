import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import './styles.css';

const FanaticalBlog = () => {
    return (
        <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }}>
            <Box className="blogs-box">
                <Box flex={1 / 3} className="blog-box">
                    <Box className="fanatical-blog">
                        <img src="https://images.prismic.io/fanatical/10fc584f-6dbb-4be7-aa12-e5758b2ae623_Resident+Evil+4+010.jpg" alt="sample41" />
                    </Box>
                    <Box >
                        <h4 className="blog-card-title">The Story So Far - Resident Evil 4</h4>
                    </Box>
                    <Box className="blog-card-date">Posted 8 days ago</Box>
                </Box>
                <Box flex={1 / 3}>
                    <Box className="fanatical-blog">
                        <img src="https://images.prismic.io/fanatical/10fc584f-6dbb-4be7-aa12-e5758b2ae623_Resident+Evil+4+010.jpg" alt="sample41" />
                    </Box>
                    <Box >
                        <h4 className="blog-card-title">The Story So Far - Resident Evil 4</h4>
                    </Box>
                    <Box className="blog-card-date">Posted 8 days ago</Box>
                </Box>
                <Box flex={1 / 3}>
                    <Box className="fanatical-blog">
                        <img src="https://images.prismic.io/fanatical/10fc584f-6dbb-4be7-aa12-e5758b2ae623_Resident+Evil+4+010.jpg" alt="sample41" />
                    </Box>
                    <Box >
                        <h4 className="blog-card-title">The Story So Far - Resident Evil 4</h4>
                    </Box>
                    <Box className="blog-card-date">Posted 8 days ago</Box>
                </Box>
            </Box>

        </Container>
    );
}

export default FanaticalBlog






