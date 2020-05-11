export default (request) => {
    const {
        page,
        limit,
        description_length
    } = request
    const noOfPage = parseInt(page, 10) || 1
    const pageLimit = parseInt(limit, 10) || 20
    const totalNoOfPage = parseInt(description_length, 10) || 200

    return {
        noOfPage,
        pageLimit,
        totalNoOfPage
    };
}

export const paginatePage = (array, {
    offset,
    limit
}) => {
    return array.slice(offset, limit + offset)
}

export const paginate = ({
    noOfPage,
    pageLimit,
}) => {
    const offset = (noOfPage - 1) * pageLimit;
    return {
        offset,
        limit: pageLimit
    }
}