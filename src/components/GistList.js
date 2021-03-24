import React from 'react'
import Card from '../components/card/card'

function GistList({ currentArrayGist }) {
    return (
        <div>
            {
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

