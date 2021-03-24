import React, { useEffect, useState } from 'react'
import { getPublicGists } from '../services/gistService'
import './GistList.css'
import Card from '../components/card/card'
import Loading from './Spinner/Spinner'
import Pagination from './Pagination/Pagination'

const GistList = () => {
    const [dataArray, setDataArray] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setPostPerPage] = useState(10)

    useEffect(() => {

        const listHandler = async () => {
            const { data } = await getPublicGists()
            setDataArray(data)
            if (data) {
                setIsLoading(false)
            }
            console.log(data)
        }
        listHandler()
    }, [])

    const indexOfTheLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfTheLastItem - itemsPerPage;
    const currentArrayItem = dataArray ? dataArray.slice(indexOfFirstItem, indexOfTheLastItem) : ''

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return <div className="wrapper">
        {isLoading ? <Loading /> : currentArrayItem.map((v, i) => {
            return <div key={i}>
                <Card key={i}
                    updatedAt={v.updated_at}
                    createdAt={v.created_at}
                    name={v.owner.login}
                    img={v.avatar_url}
                />
                {/* <span>{v.owner.login}</span> */}
            </div>
        })}
        <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={dataArray?.length}
            paginate={paginate}
        />

    </div>
}

export default GistList
