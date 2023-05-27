import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const PostsLoader = () => {
    return (
        <SkeletonTheme baseColor="#202836" highlightColor="#595959">
            <div>
                <Skeleton height={250} width={'100%'} style={{ marginTop: '1rem' }} />
                <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                        <Skeleton height={40} width={40} circle />
                        <div style={{ width: '100%' }}>
                            <Skeleton height={10} width={'100%'} />
                            <Skeleton height={10} width={'100%'} />
                        </div>
                    </div>
                    <Skeleton height={50} width={'100%'} />
                </div>
            </div>
            <div>
                <Skeleton height={250} width={'100%'} style={{ marginTop: '1rem' }} />
                <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                        <Skeleton height={40} width={40} circle />
                        <div style={{ width: '100%' }}>
                            <Skeleton height={10} width={'100%'} />
                            <Skeleton height={10} width={'100%'} />
                        </div>
                    </div>
                    <Skeleton height={50} width={'100%'} />
                </div>
            </div>
            <div>
                <Skeleton height={250} width={'100%'} style={{ marginTop: '1rem' }} />
                <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                        <Skeleton height={40} width={40} circle />
                        <div style={{ width: '100%' }}>
                            <Skeleton height={10} width={'100%'} />
                            <Skeleton height={10} width={'100%'} />
                        </div>
                    </div>
                    <Skeleton height={50} width={'100%'} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default PostsLoader;