import {
    useMatch,
    useResolvedPath,
    type LinkProps,
    Link,
} from 'react-router-dom'

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link
                style={{ textDecoration: match ? 'underline' : 'none' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && ' (active)'}
        </div>
    )
}

export default CustomLink
