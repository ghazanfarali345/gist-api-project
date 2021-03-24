
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import MaterialPagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // const classes = useStyles();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        // <MaterialPagination count />
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='!#' >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;