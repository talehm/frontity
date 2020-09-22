import React from 'react'
function Blog(props) {
    //const router = useRouter()
    console.log(props)
    const classes = useStyles();
    //const { location, match, ...rest } = props;
    //const tagSlug = match.params.tag
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    ); React.useEffect(() => {
        // props.getTags()
    }, [])
    return (
        <h1>{"tagSlug"}</h1>
    )
}

export default Blog