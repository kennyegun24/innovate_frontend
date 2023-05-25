import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const PostDetailsLoader = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#333333">
            <Skeleton height={250} width={450} />
            <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Skeleton height={40} width={40} circle />
                    <div>
                        <Skeleton height={10} width={400} />
                        <Skeleton height={10} width={400} />
                    </div>
                </div>
                <Skeleton height={50} width={450} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Skeleton height={40} width={40} circle />
                <div>
                    <Skeleton height={10} width={400} />
                    <Skeleton height={10} width={400} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default PostDetailsLoader