import { MoreVert, Newspaper, Search, Slideshow, Image } from "@mui/icons-material";
import React from "react";

export const newsFilteringData = [
    {
        id: 1,
        title: 'All',
        icon: React.createElement(Search, null)
    },
    {
        id: 2,
        title: 'News',
        icon: React.createElement(Newspaper, null)
    },
    {
        id: 3,
        title: 'Images',
        icon: React.createElement(Image, null)
    },
    {
        id: 4,
        title: 'Videos',
        icon: React.createElement(Slideshow, null)
    },
    {
        id: 5,
        title: 'More',
        icon: React.createElement(MoreVert, null)
    }
];