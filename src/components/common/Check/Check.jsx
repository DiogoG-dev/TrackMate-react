import './Check.css';

export function Check({isActive}) {
    return (
        <div className={isActive ? "overlay active" : "overlay"}>
            <div className={isActive ? "check active" : "check"}>
                <svg viewBox='0 0 120 120' className='check-svg'>
                    <circle className='circle-outline' cx='60' cy='60' r='50' />
                    <path className='check-path' d='M40 66 L54 80 L82 46' />
                </svg>
            </div>
        </div>
    )
}