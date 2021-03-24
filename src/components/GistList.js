import React, { useEffect } from 'react'
import Card from '../components/card/card'

function GistList({ currentArrayGist, fiteredGist }) {

    return (
        <div>
            {fiteredGist ?

                fiteredGist.map((v, i) => {
                    return <div key={i}>
                        <Card key={i}
                            updatedAt={v.updated_at}
                            createdAt={v.created_at}
                            name={v.owner.login}
                            img={v.avatar_url}
                        />
                    </div>
                })
                :
                currentArrayGist.map((v, i) => {
                    return <div key={i}>
                        <Card key={i}
                            updatedAt={v.updated_at}
                            createdAt={v.created_at}
                            name={v.owner.login}
                            img={v.avatar_url}
                        />
                    </div>
                })
            }
        </div>
    )
}

export default GistList

