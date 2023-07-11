import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GenreListItemSkeleton = () => {
    return (
        <Card marginY='5px' paddingY='5px' height='37px'>
            <Skeleton />
            <CardBody padding={0}>
                <SkeletonText padding={2.5} noOfLines={1} />
            </CardBody>
        </Card>
    )
}

export default GenreListItemSkeleton