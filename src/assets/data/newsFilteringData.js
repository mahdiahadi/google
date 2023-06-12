import { MoreVert, Newspaper, Search, Slideshow, Image } from "@mui/icons-material";
import React from "react";

export const newsFilteringData = [
    {
        id: 1,
        title: 'All',
        icon: React.createElement(Search, { fontSize: 'small'})
    },
    {
        id: 2,
        title: 'News',
        icon: React.createElement(Newspaper, { fontSize: 'small'})
    },
    {
        id: 3,
        title: 'Images',
        icon: React.createElement(Image, { fontSize: 'small'})
    },
    {
        id: 4,
        title: 'Videos',
        icon: React.createElement(Slideshow, { fontSize: 'small'})
    },
    {
        id: 5,
        title: 'More',
        icon: React.createElement(MoreVert, { fontSize: 'small'})
    }
];