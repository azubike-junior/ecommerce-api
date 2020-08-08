export default (request) => {
    const {
        page,
        limit,
        description_length
    } = request
    const numberOfPage = parseInt(page, 10) || 1
    const pageLimit = parseInt(limit, 10) || 20
    const totalNumberOfPage = parseInt(description_length, 10) || 200

    return {
        numberOfPage,
        pageLimit,
        totalNumberOfPage
    };
}

export const pagination = (array, {
    offset,
    limit
}) => {
    return array.slice(offset, limit + offset)
}


export const paginate = ({
    numberOfPage,
    pageLimit,
}) => {
    const offset = (numberOfPage - 1) * pageLimit;
    return {
        offset,
        limit: pageLimit
    }
}

export const paginatePage = (request, counts) => {
    const next = {};
    const previous = {};

    let {
        limit = 20, page = 1
    } = request.query;

    if (limit < 1) {
        limit = 20
    }

    if (page < 1) {
        page = 1
    }

    if (page * limit < counts) {
        next.page = page + 1;
        next.limit = limit
    }
    if (page > 1) {
        previous.page = page - 1;
        previous.limit = limit
    }

    return {
        next,
        previous,
        counts
    }
}