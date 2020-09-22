import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles } from '@material-ui/core/styles';
import UrlPattern from 'url-pattern';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const getTotalPages = (state) => {
    const data = state.source.get(state.router.link)
    return Object.values(state.source.blog)[0].totalPages
}

const PaginationRounded = ({ state, actions, libraries }) => {
    const classes = useStyles();
    const { totalPages, paged } = state.source.get(state.router.link);
    const { path, category, query } = libraries.source.parse(state.router.link);
    //const totalPages = getTotalPages(state)
    const { navigationPage } = state.theme
    const { setNavigationPage } = actions.theme
    const isThereNextPage = paged < totalPages;
    const isTherePreviousPage = paged > 1;
    // Render pagination item link like /blog/1 , blog/2 and etc.
    const renderLink = (item) => {
        if (item.page === 1) {
            return path.replace(paged + "/", '')
        }
        else if (path.includes(paged)) {
            return path.replace(paged + "/", item.page)
        }
        else {
            return path + item.page
        }
    }

    React.useEffect(() => {
        //setNavigationPage()
    }, [state.router.link])
    return (
        <div className={classes.root}>
            <Pagination
                color="primary"
                shape="rounded"
                page={paged}
                size="large"
                count={totalPages}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}

                        link={
                            renderLink(item)
                        }
                        {...item}
                    />
                )}
            />
        </div>
    );
}
export default connect(PaginationRounded)
